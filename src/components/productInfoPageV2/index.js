import React from 'react';
import { Container, Grid, Typography, Button, CardMedia, Box } from '@mui/material';
import Slider from "react-slick"; // Make sure to install react-slick

// Custom Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const ProductInfoPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Full-width image section */}
      <Box position="relative" mb={4}>
        <CardMedia
          component="img"
          image="/images/products/hero_first.webp" // Replace with your full-width image path
          alt="Executive Studio"
          sx={{ height: '60vh', width: '100%', objectFit: 'cover' }}
        />
        <Box position="absolute" top="20%" left="5%" color="white">
          <Typography variant="h3">EXECUTIVE STUDIO</Typography>
          <Typography variant="h6">Unique and Spacious</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1">
            This is more than just a stay. Experience a place where past elegance meets present-day luxurious comfort. Be embraced by a timeless atmosphere that cherishes the heritage of the location.
          </Typography>
        </Box>
      </Box>

      {/* Grid section */}
      <Grid container spacing={2} sx={{ borderTop: 1, borderColor: 'divider' }}>
        <Grid item xs={4} sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Box textAlign="center">
            <Typography variant="h6">EXECUTIVE SUITE</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Box textAlign="center">
            <Typography variant="h6">EXECUTIVE JUNIOR SUITE</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h6">SUPERIOR</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Tall and short image section */}
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CardMedia
              component="img"
              image="/images/ticker/ticker_1.webp" // Replace with your tall image path
              alt="Detail"
              sx={{ height: '80vh', objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image="/images/ticker/ticker_2.webp" // Replace with your short image path
              alt="Detail"
              sx={{ height: '40vh', objectFit: 'cover', mb: 2 }}
            />
            <Typography variant="body1">
              In the details, we strive for the highest quality. Our rooms feature unique designs that create a timeless atmosphere, embracing the heritage of the location.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              BOOK NOW
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Slider section */}
      <Box my={4}>
        <Slider {...sliderSettings}>
          <Box px={2}>
            <CardMedia
              component="img"
              image="/images/ticker/ticker_1.webp" // Replace with your slider image path
              alt="Executive Suite"
              sx={{ height: '40vh', objectFit: 'cover' }}
            />
            <Typography variant="h6" align="center">EXECUTIVE SUITE</Typography>
          </Box>
          <Box px={2}>
            <CardMedia
              component="img"
              image="/images/ticker/ticker_2.webp" // Replace with your slider image path
              alt="Executive Junior Suite"
              sx={{ height: '40vh', objectFit: 'cover' }}
            />
            <Typography variant="h6" align="center">EXECUTIVE JUNIOR SUITE</Typography>
          </Box>
          <Box px={2}>
            <CardMedia
              component="img"
              image="/images/ticker/ticker_3.webp" // Replace with your slider image path
              alt="Superior"
              sx={{ height: '40vh', objectFit: 'cover' }}
            />
            <Typography variant="h6" align="center">SUPERIOR</Typography>
          </Box>
        </Slider>
      </Box>
    </Container>
  );
};

export default ProductInfoPage;
