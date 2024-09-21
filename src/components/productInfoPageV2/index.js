import React from 'react';
import { Container, Grid, Typography, Button, CardMedia, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../../common/dataV2';
import NavigationHeader from "../headerV2";
import Footer from "../footerV2";



const ProductInfoPage = () => {
    const packages = content.packages;
    const location = useLocation();
    const { index } = location.state || 1;
    return (
        <div>
            <NavigationHeader />
        
        <Container maxWidth="false" disableGutters="true">
            {/* Full-width image section */}
            <Box position="relative" mb={4}>
                <CardMedia
                    component="img"
                    image={packages[index].heroImage} // Replace with your full-width image path
                    alt="Executive Studio"
                    sx={{ height: '60vh', width: '100%', objectFit: 'cover' }}
                />
                <Box position="absolute" top="20%" left="5%" color="white">
                    <Typography variant="h3">{packages[index].heroHeading}</Typography>
                    <Typography variant="h6">{packages[index].heroSubHeading}</Typography>
                </Box>
                <Grid container justifyContent="space-around"  item xs={12} sx={{ marginTop: '5%' }}>
                    <Grid container lg={6} xs={11} alignItems="center" >
                        <Typography variant="h6">
                        {packages[index].section2Heading}
                        </Typography>
                        <Typography variant="h3">
                        {packages[index].section2SubHeading}
                        </Typography>
                    </Grid>
                    <Grid container direction="column" alignItems="center" lg={6} xs={11}>
                        <Typography variant="body1">
                        {packages[index].section2Description}
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/book" sx={{ mt: 2, width: '40%' }}>
                            Celebrate With Us
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Grid section */}
            <Grid container spacing={2} sx={{ paddingTop: '5%', paddingBottom: '5%' }}>
                <Grid item lg={2} xs={5} sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <Box textAlign="center">
                        <Typography variant="h6">EXECUTIVE SUITE</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} xs={5}  sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <Box textAlign="center">
                        <Typography variant="h6">EXECUTIVE JUNIOR SUITE</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} xs={5}  sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <Box textAlign="center">
                        <Typography variant="h6">EXECUTIVE SUITE</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} xs={5} sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <Box textAlign="center">
                        <Typography variant="h6">EXECUTIVE JUNIOR SUITE</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} xs={5}  sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <Box textAlign="center">
                        <Typography variant="h6">SUPERIOR</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} xs={5} >
                    <Box textAlign="center">
                        <Typography variant="h6">SUPERIOR</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Tall and short image section */}
            <Box my={4}>
                <Grid container justifyContent="center" spacing={10} sx={{  objectFit: 'cover' }}>
                    <Grid item lg={7} xs={12} sx={{ bottom: '0px' }}>
                        <CardMedia 
                            component="img"
                            image={packages[index].tallImage} // Replace with your tall image path
                            alt="Detail"
                            sx={{ height: '70vh', objectFit: 'cover' }}
                        />
                    </Grid>
                    <Grid container direction="column" justifyContent="space-around" item lg={3} xs={11}>
                        <CardMedia
                            component="img"
                            image={packages[index].shortImage} // Replace with your short image path
                            alt="Detail"
                            sx={{ height: '40vh', objectFit: 'cover', mb: 2 }}
                        />
                        <Container>
                            <Typography variant="body1">
                            {packages[index].imageSectionDesc}
                            </Typography>
                            <Button variant="contained" color="primary" component={Link} to="/book" sx={{ mt: 2 }}>
                                Celebrate With Us
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Footer />
        </div>
    );
};

export default ProductInfoPage;
