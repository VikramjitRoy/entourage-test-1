import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavigationHeader from "../headerV2";
import Footer from "../footerV2";
import { content } from "../../common/dataV2";

const ProductShowcase = ({service}) => {

  const services = content.services;

  const location = useLocation();
  const { index } = location.state || {};
  return (
    <div>
    <NavigationHeader />
    <Box>
      {/* Full-Screen Product Image with Title */}
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${services[index].imageUrl})`, // Replace with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          // padding: '20px',
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
          {services[index].name}
        </Typography>
      </Box>

      {/* Product Description */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h4" gutterBottom>
            Service Description
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', padding: '20px' }}>
        {services[index].description}
        </Typography>
      </Container>

      {/* Uncomment this when we have more services */}
      {/* <Container sx={{ padding: '20px 0' }}>
        <Typography variant="h5" gutterBottom>
          Explore other services:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: `url(${services[(index+1) % services.length ].imageUrl})`, // Replace with actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '100%', // 1:1 aspect ratio
                position: 'relative',
              }}
            />
            <Typography variant="h4" align="center">
            {services[(index+1) % services.length ].name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: `url(${services[(index+2) % services.length ].imageUrl})`, // Replace with actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '100%', // 1:1 aspect ratio
                position: 'relative',
              }}
            />
            <Typography variant="h4" align="center">
            {services[(index+2) % services.length ].name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: `url(${services[(index+3) % services.length ].imageUrl})`, // Replace with actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '100%', // 1:1 aspect ratio
                position: 'relative',
              }}
            />
            <Typography variant="h4" align="center">
            {services[(index+3) % services.length ].name}
            </Typography>
          </Grid>
        </Grid>
      </Container> */}
    </Box>
    <Footer />
    </div>
  );
};

export default ProductShowcase;
