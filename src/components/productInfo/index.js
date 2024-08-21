import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const ProductShowcase = () => {
  return (
    <Box>
      {/* Full-Screen Product Image with Title */}
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          backgroundImage: 'url(/images/products/hero_first.webp)', // Replace with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px',
          position: 'relative',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#FFF',
            fontWeight: 'bold',
            position: 'absolute',
            bottom: '20px',
            left: '20px',
          }}
        >
          Fog Effect
        </Typography>
      </Box>

      {/* Product Description */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h4" gutterBottom>
            Product Description
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
        Begin your event with a dreamy entry which feels like walking over the clouds. We use dry ice to fill the theater with cloud like Fog during the entry which makes it really heavenly and magical. Then gas is completely safe and non-suffocation, so even kids can enjoy it freely. Pricing for Fog entry starts at RS.350 and you can add multiple Fog entries in your event as per your requirement.
        </Typography>
      </Container>

      {/* Explore Other Products */}
      <Container sx={{ padding: '20px 0' }}>
        <Typography variant="h5" gutterBottom>
          Get to know other services:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: 'url(/images/ticker/ticker_1.webp)', // Replace with actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '100%', // 1:1 aspect ratio
                position: 'relative',
              }}
            />
            <Typography variant="body1" align="center">
              Product Name 1
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: 'url(/images/ticker/ticker_2.webp)', // Replace with actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '100%', // 1:1 aspect ratio
                position: 'relative',
              }}
            />
            <Typography variant="body1" align="center">
              Product Name 2
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: 'url(/images/ticker/ticker_3.webp)', // Replace with actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '100%', // 1:1 aspect ratio
                position: 'relative',
              }}
            />
            <Typography variant="body1" align="center">
              Product Name 3
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductShowcase;
