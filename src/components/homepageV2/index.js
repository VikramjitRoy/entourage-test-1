
import { useEffect, useState, useRef } from "react";
import {  Typography, Box, Grid, Stepper, Step, StepLabel, Fab, Card, CardMedia, CardContent, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./homepage.css";
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import { ArrowBack, ArrowForward, AccessTime, CheckCircleOutline, Payment, ShoppingCart, EventAvailable, IndeterminateCheckBox } from '@mui/icons-material';
import {content} from '../../common/dataV2'
import Footer from "../footerV2";
import NavigationHeader from "../headerV2";
import WhatsAppButton from "./WhatsAppButton";
import { useSwipeable } from 'react-swipeable';


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
        backgroundImage: 'url("/images/new/floral_red_decor_potrait.jpg")', // Replace with your hero image URL
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

function HeroComponent({ backgroundImage, index, dim }) {

    const classes = useStyles();
    const classesParallax = useStylesParallax();
    const packages = ["ROMANTIC", "CELEBRATION"]

    const slideInFromBottom = keyframes`
        0% {
            transform: translateY(100%) scale(1);
            opacity: 0;
        }
        100% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
    `;

    return (
        <div className={`${classesParallax.section} ${classesParallax.parallax} ${dim ? classes.dim : ''}`} style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Box
                sx={{
                    display: 'inline-block',
                    animation: `${slideInFromBottom} 2s ease-out`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                }}
            >
                <Typography component={Link} to={{
                        pathname: '/productInfo',
                        state: { index }
                      }} variant="h4" sx = {{textDecoration: "none",
                        textShadow:"2px 2px 4px #000000", color: "white"}}>
                    {packages[index]}
                </Typography>
            </Box>
        </div>
    );
}



const InstagramTicker = () => {

    const images = [
        '/images/new/balloon_floral_path.jpg',
        '/images/new/candle_lit.jpg',
        '/images/new/fnb.jpg',
        '/images/new/floral_red_decor_potrait.jpg',
        '/images/new/balloon_fog_portrait.jpg',
        '/images/new/balloon_floral_path.jpg',
        '/images/new/candle_lit.jpg',
        '/images/new/fnb.jpg',
        '/images/new/floral_red_decor_potrait.jpg',
        '/images/new/balloon_fog_portrait.jpg',
        '/images/new/balloon_floral_path.jpg',
        '/images/new/candle_lit.jpg',
        '/images/new/fnb.jpg',
        '/images/new/floral_red_decor_potrait.jpg',
        '/images/new/balloon_fog_portrait.jpg',
    ];


    useEffect(()=>{
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for recuded motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

            scrollers.forEach((scroller) => {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", true);

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it
                // add aria-hidden to it
                // add it into the `.scroller-inner`
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, [])
    const handleInstaHandleClick = () => {
        window.open('https://www.instagram.com/flickstones/', '_blank');
    };
    


    return (
        <div className="instagram-ticker-container">
            <div className="header-ticker">
                <div className="header-item">Instagram</div>
            </div>
            <Typography sx={{textDecoration: 'underline'}} onClick={handleInstaHandleClick} variant="h3" className="instagram-handle">
            @flickstones
            </Typography>
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


const texts = [
    'Birthday',
    'Anniversary',
    'Romantic Date',
    'Proposals',
    // 'Bride to be',
    'Farewell',
    'Congratulations',
    'Baby Shower',
  ];
  
  const images = {
    Birthday: '/images/new/balloon_sub_hero.jpg',
    Anniversary: '/images/new/balloon_floral_path.jpg',
    'Romantic Date': '/images/new/floral_red_decor_potrait.jpg',
    'Proposals': '/images/new/floral_white_decor_potrait.png',
    // 'Bride to be': '/images/new/hero_3.webp',
    Farewell: '/images/new/fnb.jpg',
    Congratulations: '/images/new/theater_seating.jpg',
    'Baby Shower': '/images/new/photo_clipping.jpg',
  };
  
  const TextWithImage = () => {
    const [currentText, setCurrentText] = useState(texts[0]);
    const textRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentText(entry.target.innerText);
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the text is in view
        }
      );
  
      textRefs.current.forEach((ref) => observer.observe(ref));
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <Box sx={{ display: 'flex' }}>

        {/* Left part with image */}
        <Box
          className="different-celebration-images"
        >
          <img
            src={images[currentText]}
            alt={currentText}
            style={{ width: '60%', height: '60%', objectFit: 'cover' }}
          />
        </Box>
        {/* Right part with texts */}
        <Box sx={{ flex: 1, overflowY: 'scroll', padding: 4 }}>
          {texts.map((text, index) => (
            <Typography
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              variant="h4"
              sx={{ fontSize: '4rem', textAlign: 'left', color: currentText == text?'black':'rgb(153, 153, 153)', fontFamily: '"Montserrat Variable", sans-serif'}}            >
              {text}
            </Typography>
          ))}
        </Box>
  
        
      </Box>
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
              const translateX =   Math.pow(12, ((height - currentScrollY) / height)*10)* (i - n /2 + 1);
            //   console.log(letter +"   "+ translateX);
              letter.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
            }
          };

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

  const sections = [
    {
      id: 1,
      image: '/images/new/candle_lit.jpg',
      heading: "Candle Lit Dinner",
      description: "Make your romantic dates special with a candlelit dinner"
    },
    {
      id: 2,
      image: '/images/new/fnb.jpg',
      heading: "Complete package",
      description: "Fire, fog, food, cinema all under the same roof"
    },
    {
      id: 3,
      image: '/images/new/floral_white_decor_potrait.png',
      heading: "Choice of arch",
      description: "Choose between a floral or balloon arch"
    },
    {
      id: 4,
      image: '/images/new/theater_seating.jpg',
      heading: "Premium Theater Experience",
      description: "150inch cinematic 4k screen with dolby atmos sound with recliner seats"
    },
    {
      id: 5,
      image: '/images/new/balloon_portrait.jpg',
      heading: "Customizations",
      description: "Make your celebrations extra special with customized bouquets and props"
    },
  ];

  const StyledImageContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flex: '0 0 50vw', // Each section takes full width of the viewport
    borderRight:  '2px solid gray', // Vertical divider
    padding: '16px',
  });
  
  // Custom styled component for images
  const StyledImage = styled('img')({
    width: '70%',
    height: '80%',
    borderRadius: '50% 50% 0 0', // Oval top and rectangular bottom
    objectFit: 'cover',
    color: 'rgb(32, 33, 31)'
  });

  const TextOverlay = styled(Box)({
    position: 'absolute',
    bottom: '25%',
    left: '50%',
    padding: '16px',
    color: 'white',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  });
  
  const HorizontalScrollSections = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = (event) => {
        const container = containerRef.current;
      
        if (container) {
            const maxHorizontalScroll = container.scrollWidth - container.clientWidth;
            const reachedEnd = container.scrollLeft === maxHorizontalScroll;
            const atStart = container.scrollLeft === 0;
    
            if (event.deltaY > 0 && !reachedEnd) {
              // Scrolling down and haven't reached the end of the horizontal scroll
              container.scrollLeft += event.deltaY;
              event.preventDefault();
            }  
            else if (event.deltaY < 0 && container.scrollLeft > 0) {
              // Scrolling up and in the middle of horizontal scroll
              container.scrollLeft += event.deltaY;
              event.preventDefault();
            }
        }
      };
  

	  const container = containerRef.current;
	  if (container && window.screen.width > 480) {
	    container.addEventListener('wheel', handleScroll, { passive: false });
	  }
	
  
      return () => {
        if (container) {
          container.removeEventListener('wheel', handleScroll);
        }
      };
    }, []);
  
    return (
      <Box
        ref={containerRef}
        className="horizontal-scroll-section-container"
      >
        {sections.map((section) => (
          <Box className="styled-image-container">
			<StyledImage src={section.image} alt={`section-${section.id}`} />
			<TextOverlay>
				<Typography variant="h4">{section.heading}</Typography>
				<Typography variant="body1">{section.description}</Typography>
			</TextOverlay>
          </Box>
        ))}
      </Box> 
    );
  };
  
  const ImageCarousel = ({ services }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    };

	const handlers = useSwipeable({
		onSwipedLeft: () => handleNext(),
		onSwipedRight: () => handlePrevious(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	  });

    const getImageStyle = (index) => {
        if (index === currentIndex) {
            return {
                opacity: 1,
                transform: 'scale(1)',
                zIndex: 2,
                visibility: 'visible',
            };
        } else if (index === currentIndex - 1 || (currentIndex === 0 && index === services.length - 1)) {
            return {
                opacity: 0.5,
                transform: 'scale(0.8) translateX(-50%)',
                zIndex: 1,
                visibility: 'visible',
            };
        } else if (index === currentIndex + 1 || (currentIndex === services.length - 1 && index === 0)) {
            return {
                opacity: 0.5,
                transform: 'scale(0.8) translateX(50%)',
                zIndex: 1,
                visibility: 'visible',
            };
        } else {
            return {
                opacity: 0,
                visibility: 'hidden',
                zIndex: 0,
            };
        }
    };

    return (
        <Box {...handlers} sx={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
            { services.map((service, index) => (
                <Card
                    key={service.name}
                    sx={{
                        position: 'absolute',
                        width: '50%',
                        height: '100%',
                        transformOrigin: 'center',
                        transition: 'transform 0.5s ease, opacity 0.5s ease',
                        textDecoration: "none",
                        boxShadow: "none",
                        ...getImageStyle(index),
                    }}
                    component={Link} to={{
                        pathname: '/product',
                        state: { index }
                      }}
                >
                    <CardMedia
                        component="img"
                        image={service.imageUrl}
                        alt={service.name}
                        sx={{ width: '100%', height: '80%', objectFit: 'cover' }}
                    />
                     <CardContent>
                      <Typography variant="h4" >
                        {service.name}
                      </Typography>
                    </CardContent>
                </Card>
            ))}
            <Box sx={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', gap: '10px' }}>
                <IconButton onClick={handlePrevious} color="primary">
                    <ArrowBack />
                </IconButton>
                <IconButton onClick={handleNext} color="primary">
                    <ArrowForward />
                </IconButton>
            </Box>
        </Box>
    );
};

function HomePage() {
    const classes = useStylesParallax();
    const [dimStates, setDimStates] = useState([false, true, true]);
    const [showFab, setShowFab] = useState(true);

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
            <NavigationHeader />
            {showFab && (<Fab
            color="primary"
            aria-label="celebrate"
            variant="extended"
            component={Link} to="/book"
            sx={{
                position: 'fixed',
                bottom: '5vh', // 5% of viewport height above the bottom
                left: '50%',    // Center horizontally
                transform: 'translateX(-50%)', // Adjust to keep it centered
                zIndex: '999'
            }}
            >
                Celebrate with Us
            </Fab>)}
            <HeroComponent
                backgroundImage="/images/new/floral_red_decor_potrait.jpg"
                index="0"
                dim={dimStates[0]}
            />
            <HeroComponent
                backgroundImage="/images/new/balloon_floral_path.jpg"
                index="1"
                dim={dimStates[1]}
            />
            <TextWithImage />
            <HorizontalScrollSections />
            <InstagramTicker />
            <ImageCarousel services={content.services} />
            <ScrollZoomFooter />
			<WhatsAppButton />
            <Footer />
        </div>
    );
}

export default HomePage;
