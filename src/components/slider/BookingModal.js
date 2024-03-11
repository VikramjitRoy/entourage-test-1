import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Grid, Card, CardContent, CardMedia, Typography} from '@mui/material';
import { Summarize } from '@mui/icons-material';

const slots = ["9:00 AM to 12:00 AM", "12:30 PM to 03:30 PM", "04:00 PM to 7:00 PM", "7:30 PM to 9:00 PM", "9:30 PM to 12:30 PM"];
const persons = [2, 3, 4, 5, 6, 7, 8];

const cakesData = [
  { name: 'Vanilla Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Strawberry Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Butterscotch Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Pineapple Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Mango Crush Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Chocolate Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Dark Chocolate Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Black Forest Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'White Forest Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Choco chips Cake', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  // Add more cakes as needed
];

const decorationsData = [
  { name: 'Birthday', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Anniversary', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Bride/Groom to be', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Mom to be', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Baby Shower', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Marriage Proposal', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Romantic Proposal', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Congratulations', price: 500, image: '/images/products/pool_table_reszied.jpg' }
  // Add more decorations as needed
];

const addonsData = [
  { name: 'Fog Effect', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Photo Clippings', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Rose Petal Entry', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Rose Heart', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Single Rose', price: 500, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Rose Bouquet', price: 500, image: '/images/products/pool_table_reszied.jpg' }
  // Add more decorations as needed
];



export default function BookingModal({ open, onClose, onSubmit }) {
  const [activePage, setActivePage] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState({ open: false, message: '' });

  const [formData, setFormData] = useState({
    date: '',
    slot: '',
    numberOfPersons: '',
    selectedAddon: null, // For page 2
    selectedCake: null, // For page 3
    selectedDecoration: null, // For page 4
    decorationName: '', // For the input box on page 2
  });

  const handleInputChange = (name, value) => {
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeMax = (name, value) => {
    // Check if the input length is within the allowed limit
    if (value.length <= 8) {
      handleInputChange(name, value);
    }
  };
  

 
  const handleNextPage = () => {
    if (activePage === 1 && !formData.date) {
      // Display error message or take appropriate action
      alert('Please select a date.');
      return;
    }

    if (activePage === 1 && !formData.slot) {
      // Display error message or take appropriate action
      alert('Please select a slot.');
      return;
    }

    if (activePage === 1 && !formData.numberOfPersons) {
      // Display error message or take appropriate action
      alert('Please select the number of persons.');
      return;
    }

    if (activePage < 5) {
      setActivePage(activePage + 1);
    }
  };

  const handlePreviousPage = () => {
    if(activePage > 0 ) {
      setActivePage(activePage - 1);
    }
  };

  const handleProceedToPay = () => {
    // Add logic to submit the form data to the server
    console.log("Form data submitted:", formData);
    // Add any additional logic for payment processing here

    // Close the modal after payment processing
    onClose();
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  const handleFormSubmit = () => {
    // Add logic to handle form submission
    onSubmit(formData);
    onClose();
  };

  const sum = (formData) => {
    let total = 2000;
    if(formData.selectedDecoration != null) total +=decorationsData[formData.selectedDecoration].price;
    if(formData.selectedCake != null) total +=cakesData[formData.selectedCake].price;
    if(formData.selectedAddon != null) total +=addonsData[formData.selectedAddon].price;
    return total;
  };


  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        {activePage === 1 && (
          <div>
            {/* Page 1: Date Picker, Slots, and Number of Persons */}
            <DialogTitle>Pick Your Slot and number of seats</DialogTitle>
            <TextField
              // label="Select Date"
              type="date"
              fullWidth
              margin="normal"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
            />
            <TextField
              select
              label="Select Slot"
              fullWidth
              margin="normal"
              value={formData.slot}
              onChange={(e) => handleInputChange('slot', e.target.value)}
            >
              {slots.map((slot) => (
                <MenuItem key={slot} value={slot}>
                  {slot}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Number of Persons"
              fullWidth
              margin="normal"
              value={formData.numberOfPersons}
              onChange={(e) => handleInputChange('numberOfPersons', e.target.value)}
            >
              {persons.map((person) => (
                <MenuItem key={person} value={person}>
                  {person}
                </MenuItem>
              ))}
            </TextField>
          </div>
        )}

        {activePage === 2 && (
          <div>
          <DialogTitle>Pick Your Celebration(Optional)</DialogTitle>
          <Grid container spacing={2}>
            {/* Page 2: Decorations with Text Box */}
            
            {decorationsData.map((decoration, index) => (
              <Grid item key={index} xs={6} md={4}>
                <Card
                  onClick={() => handleInputChange('selectedDecoration', index)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: formData.selectedDecoration === index ? '#e0e0e0' : 'white',
                  }}
                >
                  <CardMedia component="img" height="140" image={decoration.image} alt={decoration.name} />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {decoration.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {formData.selectedCard !== null && (
              <Grid item xs={12}>
                {/* Input box for the decoration name */}
                <TextField
                  label="Name (Max 8 characters are allowed)"
                  fullWidth
                  margin="normal"
                  value={formData.decorationName}
                  inputProps={{ maxLength: 8 }}
                  onChange={(e) => handleInputChangeMax('decorationName', e.target.value)}
                />
              </Grid>
            )}
          </Grid>
          </div>
        )}

        {activePage === 3 && (
          <div>
           <DialogTitle>Pick Your Cake(Optional)</DialogTitle>
          <Grid container spacing={2}>
            {/* Page 3: Cakes */}
           
            {cakesData.map((cake, index) => (
              <Grid item key={index} xs={6} md={4}>
                <Card onClick={() => handleInputChange('selectedCake', index)} style={{ cursor: 'pointer', backgroundColor: formData.selectedCake === index ? '#e0e0e0' : 'white', }}>
                  <CardMedia component="img" height="140" image={cake.image} alt={cake.name} />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {`${cake.name} - ${cake.price}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
        )}

        {activePage === 4 && (
          <div>
          <DialogTitle>Decoration Add-ons</DialogTitle>
          <Grid container spacing={2}>
            {/* Page 4: Decorations */}
            
            {addonsData.map((decoration, index) => (
              <Grid item key={index} xs={6} md={4}>
                <Card onClick={() => handleInputChange('selectedAddon', index)} style={{ cursor: 'pointer', backgroundColor: formData.selectedAddon === index ? '#e0e0e0' : 'white', }}>
                  <CardMedia component="img" height="140" image={decoration.image} alt={decoration.name} />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {`${decoration.name} - ${decoration.price}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
        )}

{activePage === 5 && (
          <div>
            {/* Overlay for total amount and user info */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* Display total amount and form data */}
                <Typography variant="h6">Total Amount: {sum(formData)}</Typography>
                <Typography variant="body1">Selected Date: {formData.date}</Typography>
                <Typography variant="body1">Slot: {formData.slot}</Typography>
                <Typography variant="body1">Number of persons: {formData.numberOfPersons}</Typography>
                <Typography variant="body1">Decoration: {formData.selectedDecoration && decorationsData[formData.selectedDecoration].name}</Typography>
                <Typography variant="body1">Name: {formData.decorationName}</Typography>
                <Typography variant="body1">Cake: {formData.selectedCake && cakesData[formData.selectedCake].name}</Typography>
                {/* Display other form data as needed */}
              </Grid>
              <Grid item xs={6}>
                {/* User info input fields */}
                <TextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <TextField
                  label="WhatsApp Phone Number"
                  fullWidth
                  margin="normal"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />
                <TextField
                  label="Email ID"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                
              </Grid>
            </Grid>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        {activePage > 1 && (
          <Button onClick={handlePreviousPage}>Previous</Button>
        )}
        {activePage < 5 && (
          <Button onClick={handleNextPage}>Next</Button>
        )}
      {activePage === 5 && (<Button variant="contained" color="primary" onClick={handleProceedToPay}>
                  Proceed to Pay
                </Button>)}
      </DialogActions>
    </Dialog>
  );
}
