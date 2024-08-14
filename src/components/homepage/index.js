
import { useEffect , useState} from "react";
import { Container, Typography, Box, Stack, Divider, Paper, Grid, Avatar } from "@mui/material";
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


const useStyles = makeStyles((theme) => ({
    circle: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        //   background: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    },
}));


function HomePage() {
    const classes = useStyles();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.title = "Flickstones - Home";
        const handleScroll = () => {
            // Check if the Typography component is in the viewport
            const typographyElement = document.getElementById('fadeInTypography');
            if (typographyElement) {
              const rect = typographyElement.getBoundingClientRect();
              const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
              if (rect.top <= viewHeight * 0.75) {
                setIsVisible(true);
              }
            }
          };
      
          // Add scroll event listener
          window.addEventListener('scroll', handleScroll);
      
          // Remove scroll event listener on component unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                maxWidth="false"
                sx={{
                    background: "#343131",
                }}
            >
                <Stack>
                    <UIProvider bgcolor={Colors.primary}>
                        <Appbar />
                        <Divider />

                        <ImageSlider />
                        {/* <Banner /> */}
                        <Promotions />
                        {/* <SearchBox /> */}

                        <Container maxWidth="100%" sx={{
                            mt: 4, backgroundColor: theme.palette.primary.main,
                            color: theme.palette.secondary.main,
                        }}>
                            <Paper elevation={3} sx={{
                                padding: 3, backgroundColor: theme.palette.primary.main,
                                color: theme.palette.secondary.main,
                            }}>
                                <Grid container spacing={2} justify="center" alignItems="center">
                                    {/* Image on the left */}
                                    <Grid item xs={12} md={6}>
                                        <img src="/images/products/pool_table.jpeg" alt="Image" style={{ width: '100%', height: 'auto' }} />
                                    </Grid>
                                    {/* Text on the right */}
                                    <Grid item xs={12} md={6} >
                                        <Typography variant="h4" className={`fade-in-typography ${isVisible ? 'visible' : ''}`}
      id="fadeInTypography">
                                            Experience content in a dedicated theater with 4K projector with state of art dolby atmos surround system

                                        </Typography>
                                        <Typography variant="body1">
                                            Private Theaters in Bengaluru
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Container>

                        <Container maxWidth="100%" sx={{
                            mt: 4, backgroundColor: theme.palette.primary.main,
                            color: theme.palette.secondary.main,
                        }}>
                            <Paper elevation={3} sx={{
                                padding: 3, backgroundColor: theme.palette.primary.main,
                                color: theme.palette.secondary.main,
                            }}>
                                <Grid container spacing={2} justify="center" alignItems="center">

                                    {/* Text on the right */}
                                    <Grid item xs={12} md={6} >
                                        <Typography variant="h4" gutterBottom>
                                            Make your loved ones special with elegant decorations
                                        </Typography>
                                        <Typography variant="body1">
                                            Plan your next memorable moment now.
                                        </Typography>
                                    </Grid>
                                    {/* Image on the left */}
                                    <Grid item xs={12} md={6}>
                                        <img src="/images/products/pool_table.jpeg" alt="Image" style={{ width: '100%', height: 'auto' }} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Container>
                        <Box display="flex" bgcolor={Colors.primary} justifyContent="center" sx={{ mt: 6, p: 2 }} >
                            <Typography color={Colors.secondary} variant="h4">Our Services</Typography>
                        </Box>

                        <Products />


                        <Container maxWidth="100%" sx={{ mt: 4, bgcolor: theme.palette.secondary.main }}>
                            <Grid container spacing={2} sx={{ padding: 2, textAlign: 'center' }}>
                                {[{
                                    "id": 1,
                                    "title": "Food & Beverages",
                                    "description": "Enjoy delicious food at affordable pricing in your private theater"
                                }, {
                                    "id": 2,
                                    "title": "Food & Beverages2",
                                    "description": "Enjoy delicious food at affordable pricing in your private theater"
                                }, {
                                    "id": 3,
                                    "title": "Food & Beverage3",
                                    "description": "Enjoy delicious food at affordable pricing in your private theater"
                                }, {
                                    "id": 4,
                                    "title": "Food & Beverages4",
                                    "description": "Enjoy delicious food at affordable pricing in your private theater"
                                }].map((item) => (
                                    <Grid item xs={12} md={3} key={item.id}>
                                        <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', bgcolor: theme.palette.secondary.main }}>
                                            {/* Circular Image */}
                                            <Avatar src={item.imageUrl} alt={item.title} sx={{ width: 120, height: 120, margin: 'auto' }}>
                                                {item.id}
                                            </Avatar>
                                            <Typography variant="h6" sx={{ mt: 2, color: theme.palette.primary.main }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mt: 2, color: theme.palette.primary.main }}>
                                                {item.description}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                            <WhatsAppButton />
                        </Container>

                        <Footer />

                        <AppDrawer />

                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}

export default HomePage;
