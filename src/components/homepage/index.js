
import "./homepage.css";
import { Container, Typography, Box, Stack, Divider, Paper, Grid } from "@mui/material";
import { makeStyles} from "@mui/styles";
import Appbar from "../appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import Products from "../products";
import { UIProvider } from "../../context/ui";
import Footer from "../footer";
import AppDrawer from "../drawer";
import Promotions from "../promotions";
import { useEffect } from "react";
import { Colors } from "../../styles/theme";
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

    useEffect(() => {
        document.title = "Flickstones - Home";
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
                        <Box display="flex" bgcolor={Colors.primary} justifyContent="center" sx={{ mt: 6, p: 2 }} >
                            <Typography color={Colors.secondary} variant="h4">Our Services</Typography>
                        </Box>
                        <Products />
                        <Container maxWidth="100%" sx={{ mt: 4 }}>
                            <Paper elevation={3} sx={{ padding: 3 }}>
                                <Grid container spacing={2}>
                                    {/* Image on the left */}
                                    <Grid item xs={12} md={6}>
                                        <img src="/images/products/pool_table.jpeg" alt="Image" style={{ width: '100%', height: 'auto' }} />
                                    </Grid>
                                    {/* Text on the right */}
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h4" gutterBottom>
                                        Experience content in a dedicated theater with 4K projector with state of art dolby atmos surround system

                                        </Typography>
                                        <Typography variant="body1">
                                        Private Theaters in Bengaluru
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Container>
                        <Container maxWidth="100%" sx={{ mt: 4 }}>
                            <Paper elevation={3} sx={{ padding: 3 }}>
                                <Grid container spacing={2}>
                                    {/* Image on the left */}

                                    {/* Text on the right */}
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h4" gutterBottom>
                                            Make your loved ones special with elegant decorations
                                        </Typography>
                                        <Typography variant="body1">
                                            Plan your next memorable moment now.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <img src="/images/products/pool_table.jpeg" alt="Image" style={{ width: '100%', height: 'auto' }} />
                                    </Grid>
                                </Grid>

                            </Paper>
                        </Container>
                     
                        <Container maxWidth="md" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
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
            <Paper elevation={3} sx={{ padding: 2 }}>
              <div className={classes.circle}>{item.id}</div>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body1">
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
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
