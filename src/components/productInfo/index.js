import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ProductShowcase = ({service}) => {

  const services = [
    {
      "name": "Fog Effect",
      "description": "Begin your event with a dreamy entry which feels like walking over the clouds. We use dry ice to fill the theater with cloud like Fog during the entry which makes it really heavenly and magical. Then gas is completely safe and non-suffocation, so even kids can enjoy it freely. Pricing for Fog entry starts at RS.350 and you can add multiple Fog entries in your event as per your requirement.",
      "imageUrl": "/images/products/hero_first.webp"
    },
    {
      "name": "DSLR Photoshoot",
      "description": "Who does not want to record beautiful memories of special days in form of high quality photos which can also be shared with friends and family on social media? Almost all our branches offer DSLR photography service for as low as RS.300 for 15 minutes. We share the soft copy of the photos within 12 hrs through Google drive link.",
      "imageUrl": "/images/products/hero_2.webp"
    },
    {
      "name": "Bouquet and other gifts",
      "description": "Want to make your special ones feel even more special by gifting them? We provide bouquet, photo frames, soft toys, showpieces, and many more gifting options in our website and at the theater for you to select the perfect gift for your loved ones. Kindly note that some gifts can be added directly from the website while some options are available only at the theater and can be purchased there directly",
      "imageUrl": "/images/products/hero_3.webp"
    },
    {
      "name": "Cakes",
      "description": "No need to hassle for arranging that perfect cake for your birthday, anniversary or any other event. We provide a diverse range of cake options that are tasty as well as economical. After your celebration, we also pack your cake properly for you to carry. Cakes can be added to your event while booking from the website with extra charges depending on the flavour",
      "imageUrl": "/images/products/hero_first.webp"
    },
    {
      "name": "Food & Beverages",
      "description": "A celebration is incomplete without delectable food, and at The Binge Town, we take pride in offering a diverse and mouthwatering menu at all our branches. Menu varies from branch to branch. Some of the most commmonly available items in our menu are: French fries, Pizza, Soft drinks, Nuggets, Milk Shakes, etc. Customers can also order food from outside. Please note that Snacks and beverages are not included in the booking and have to be ordered separately at the theater.",
      "imageUrl": "/images/products/hero_2.webp"
    }
  ];

  const location = useLocation();
  const { index } = location.state || {};
  return (
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
          {services[index].name}
        </Typography>
      </Box>

      {/* Product Description */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h4" gutterBottom>
            Product Description
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
        {services[index].description}
        </Typography>
      </Container>

      {/* Explore Other Products */}
      <Container sx={{ padding: '20px 0' }}>
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
      </Container>
    </Box>
  );
};

export default ProductShowcase;
