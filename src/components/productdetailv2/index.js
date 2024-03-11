import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ProductDescriptionPage = () => {
  return (
    <Grid container style={{ height: '100vh' }}>
      {/* First Component: Image */}
      <Grid item xs={12} md={6}>
        <Paper style={{ height: '100%', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="https://example.com/product-image.jpg" // Replace with your product image URL
            alt="Product"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Paper>
      </Grid>

      {/* Second Component: Description and List of Items */}
      <Grid item xs={12} md={6}>
        <Paper style={{ height: '100%', padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Product Description
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nisi ac lacus fermentum congue vel sed elit.
            Vivamus sed interdum tortor, id fermentum quam.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Items Provided:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Item 2" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Item 3" />
            </ListItem>
            {/* Add more items as needed */}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDescriptionPage;
