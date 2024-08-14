
import { useEffect, useState, useRef } from "react";
import { Container, Typography, Box, Stack, Divider, Paper, Grid, Avatar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../context/ui";
import theme from "../../styles/theme";
import { Colors } from "../../styles/theme";
import "./homepage.css";
import Appbar from "../appbar";
import Products from "../products";
import Footer from "../footer";
import AppDrawer from "../drawer";
import Promotions from "../promotions";
import WhatsAppButton from './WhatsAppButton';
import ImageSlider from "../slider";

const useStylesParallax = makeStyles(() => ({
    root: {
        width: '100%',
        overflow: 'hidden',
    },
    section: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        transition: 'filter 0.5s ease, opacity 0.5s ease',
    },
    heroText: {
        fontSize: '4rem !important',
        zIndex: 2,
        '@media (max-width: 1200px)': {
            fontSize: '3.5rem !important',
        },
        '@media (max-width: 992px)': {
            fontSize: '3rem !important',
        },
        '@media (max-width: 768px)': {
            fontSize: '2.5rem !important',
        },
        '@media (max-width: 576px)': {
            fontSize: '2rem !important',
        },
    },
    bookNowButton: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#1976d2',
        color: 'white',
        zIndex: 2,
        '&:hover': {
            backgroundColor: '#115293',
        },
        '@media (max-width: 600px)': {
            width: '80%',
        },
    },
    parallax: {
        backgroundAttachment: 'fixed',
    },
    dim: {
        filter: 'brightness(50%)',
        opacity: '0.5',
    },
}));

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("/images/products/hero_first.webp")', // Replace with your hero image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    },
    heroText: {
        fontSize: '2.5rem !important',
        fontWeight: 'bold',
        zIndex: 2,
        textTransform: 'uppercase',
    },
    bookNowButton: {
        position: 'relative',
        bottom: '-40%',
        left: '35%',
        width: '80%',
        transform: 'translateX(-50%)',
        backgroundColor: '#1976d2',
        color: 'white',
        zIndex: 2, // Ensure the button stays above the background
        '&:hover': {
            backgroundColor: '#115293',
        },
        justifyContent: 'bottom',

    }
}));

function HeroComponent({ backgroundImage, text, dim }) {

    // useEffect(() => {
    //     document.title = "Flickstones - Home";
    // }, []);
    // return (
    //     <ThemeProvider theme={theme}>
    //         <Container>
    //             <Stack>
    //                 <UIProvider bgcolor={Colors.primary}>
    //                     <p>Om</p>
    //                 </UIProvider>
    //             </Stack>
    //         </Container>
    //     </ThemeProvider>
    // );


    const classes = useStyles();
    const classesParallax = useStylesParallax();

    //   return (
    //     <div className={classes.root}>
    //       <Typography variant="h1" className={classes.heroText}>
    //         Celebrations
    //       </Typography>
    //       <Button variant="contained" className={classes.bookNowButton}>
    //         Book Now
    //       </Button>
    //     </div>
    //   );

    return (
        <div className={`${classesParallax.section} ${classesParallax.parallax} ${dim ? classes.dim : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Typography variant="h1" className={classesParallax.heroText}>
                {text}
            </Typography>
            <Button variant="contained" className={classesParallax.bookNowButton}>
                Book Now
            </Button>
        </div>
    );
}

const TextList = () => {
    const textRef = useRef([]);
    const [visibleTextIndex, setVisibleTextIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            textRef.current.forEach((el, index) => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const rotation = (scrollTop - el.offsetTop) / 10;
                const blur = Math.min(Math.abs(rotation / 20), 5);
                el.style.transform = `rotateY(${rotation}deg)`;
                //   el.style.filter = `blur(${blur}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleTextIndex(textRef.current.indexOf(entry.target));
                }
            });
        }, observerOptions);

        textRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            if (textRef.current) {
                textRef.current.forEach((el) => {
                    if (el) observer.unobserve(el);
                });
            }
        };
    }, []);

    const texts = [
        'Large Text 1',
        'Large Text 2',
        'Large Text 3',
        'Large Text 4',
        'Large Text 5',
    ];

    const images = [
        '/images/products/hero_first.webp', // Replace with your image URLs or paths
        '/images/products/hero_2.webp',
        '/images/products/hero_3.webp',
        '/images/products/hero_first.webp',
        '/images/products/hero_2.webp',
    ];

    return (
        <div className="text-list">
            {texts.map((text, index) => (
                <div
                    key={index}
                    ref={(el) => (textRef.current[index] = el)}
                >
                    <div className="text-item" >{text}</div>
                    {visibleTextIndex === index && (
                        <img src={images[index]} alt={text} className="viewport-image" />
                    )}
                </div>
            ))}
        </div>
    );
};


const InstagramTicker = () => {
    // useEffect(() => {
    //     const animateTicker = (selector, direction) => {
    //       const ticker = document.querySelector(selector); // this is selecting the element on which the animation will get applied
    //       let tickerWidth = ticker.scrollWidth; // this is the 
    //       let animationId;

    //       const animate = () => {
    //         ticker.style.transform = `translateX(${direction > 0 ? '-' : ''}250%)`;
    //         ticker.style.transition = 'transform 20s linear';
    //         requestAnimationFrame(() => {
    //           ticker.style.transform = `translateX(${direction < 0 ? '-' : ''}250%)`;
    //           ticker.style.transition = 'transform 20s linear';
    //         });

    //         animationId = setTimeout(animate, 20000);
    //       };

    //       animate();
    //       return () => clearTimeout(animationId);
    //     };

    //     // const leftTickerCleanup = animateTicker('.ticker-left', -1);
    //     const rightTickerCleanup = animateTicker('.ticker-right', 1);

    //     return () => {
    //     //   leftTickerCleanup();
    //       rightTickerCleanup();
    //     };
    //   }, []);


    const images = [
        '/images/ticker/ticker_1.webp',
        '/images/ticker/ticker_2.webp',
        '/images/ticker/ticker_3.webp',
        '/images/ticker/ticker_4.webp',
        '/images/ticker/ticker_5.webp',
        '/images/ticker/ticker_1.webp',
        '/images/ticker/ticker_2.webp',
        '/images/ticker/ticker_3.webp',
        '/images/ticker/ticker_4.webp',
        '/images/ticker/ticker_5.webp',
        '/images/ticker/ticker_1.webp',
        '/images/ticker/ticker_2.webp',
        '/images/ticker/ticker_3.webp',
        '/images/ticker/ticker_4.webp',
        '/images/ticker/ticker_5.webp',
    ];

    const images2 = [
        '/images/ticker/ticker_6.webp',
        '/images/ticker/ticker_7.webp',
        '/images/ticker/ticker_8.webp',
        '/images/ticker/ticker_9.webp',
        '/images/ticker/ticker_10.webp',
    ];

    return (
        <div className="instagram-ticker-container">
            <div className="header-ticker">
                <div className="header-item">Instagram</div>
                <div className="header-item">/</div>
                <div className="header-item">Instagram</div>
                <div className="header-item">/</div>
                <div className="header-item">Instagram</div>
                <div className="header-item">/</div>
            </div>
            <h2 className="instagram-handle">@flickstones</h2>
            <div className="ticker-container">
                <div className="img-ticker-rtol">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt="Instagram" className="ticker-logo" />
                    ))}
                </div>
            </div>

            <div className="ticker-container">
                <div className="img-ticker-ltor">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt="Instagram" className="ticker-logo" />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ScrollZoomFooter = () => {
    const textRef = useRef(null);
  
    useEffect(() => {
        var step = 100;
        var distance = 1500
        const handleScroll = () => {
            const textElement = textRef.current;
            const bounding = textElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
      
            const distanceFromTop = bounding.top;
            const distanceFromBottom = viewportHeight - bounding.bottom;
      
            const letters = textElement.children;

            // current scroll / total scroll size * (size /2 - i) * 10px

            const body = document.body,
                html = document.documentElement;

            const height = Math.max( body.scrollHeight, body.offsetHeight, 
                                html.clientHeight, html.scrollHeight, html.offsetHeight );
            const currentScrollY = window.scrollY;
            let n = letters.length;
            for (let i = 0; i < n; i++) {
              const letter = letters[i];
            //   const translateX = Math.max(-50, Math.min(50,viewportHeight - distanceFromTop  / 2));
              const translateX =   Math.pow(15, ((height - currentScrollY) / height)*10)* (i - n /2 + 1);
              console.log(letter +"   "+ translateX);
              letter.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
            }
          };
    //   const handleScroll = () => {
    //     const textElement = textRef.current;
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    //     const zoomLevel = 1 + ( maxScroll / scrollTop) * 0.5;
    //     console.log("zoom level");
    //     console.log(zoomLevel);
    //     console.log("scroll top");
    //     console.log(scrollTop)
    //     textElement.style.transform = `scale(${zoomLevel})`;
    //   };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <div className="container">
        <div className="zoom-text" ref={textRef}>
          {'FLICKSTONES'.split('').map((letter, index) => (
            <span key={index} className="letter">{letter}</span>
          ))}
        </div>
      </div>
    );
  };

function HomePage() {
    const classes = useStylesParallax();
    const [dimStates, setDimStates] = useState([false, true, true]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const newDimStates = [false, false, false];

            if (scrollY < windowHeight / 2) {
                newDimStates[0] = false;
                newDimStates[1] = true;
                newDimStates[2] = true;
            } else if (scrollY >= windowHeight / 2 && scrollY < windowHeight + windowHeight / 2) {
                newDimStates[0] = true;
                newDimStates[1] = false;
                newDimStates[2] = true;
            } else {
                newDimStates[0] = true;
                newDimStates[1] = true;
                newDimStates[2] = false;
            }

            setDimStates(newDimStates);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={classes.root}>
            <HeroComponent
                backgroundImage="/images/products/hero_first.webp"
                text="Celebrations 1"
                dim={dimStates[0]}
            />
            <HeroComponent
                backgroundImage="/images/products/hero_2.webp"
                text="Celebrations 2"
                dim={dimStates[1]}
            />
            <TextList />
            <InstagramTicker />
            <HeroComponent
                backgroundImage="/images/products/hero_3.webp"
                text="Celebrations 3"
                dim={dimStates[2]}
            />
            <ScrollZoomFooter />
        </div>
    );
}

export default HomePage;
