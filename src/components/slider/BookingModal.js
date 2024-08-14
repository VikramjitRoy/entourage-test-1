import React, { useState } from 'react';
import { Dialog, Container, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Grid, Card, CardContent, CardMedia, Typography, Chip, Checkbox, DialogContentText, FormControlLabel } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const slots = ["9:00 AM to 12:00 AM", "12:30 PM to 03:30 PM", "04:00 PM to 7:00 PM", "7:30 PM to 9:00 PM", "9:30 PM to 12:30 PM"];
const persons = [2, 3, 4, 5, 6, 7, 8];

const cakesData = [
  {
      "name": "Pineapple Cake",
      "price": "450",
      "image": "/images/products/cake/pineapple.avif"
  },
  {
      "name": "Black Forest Cake",
      "price": "500",
      "image": "/images/products/cake/black_forest_cake.avif"
  },
  {
      "name": "Chocolate Truffle Cake",
      "price": "500",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Butterscotch Overload Cake",
      "price": "450",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Layered Chocolate Truffle Cake",
      "price": "500",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Vanilla Cake",
      "price": "450",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Mango Fruit Cake",
      "price": "450",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Fruit Cake",
      "price": "450",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Death by Chocolate Cake",
      "price": "500",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Redvelvet Cake",
      "price": "650",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Strawberry Cheesecake",
      "price": "1000",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Blueberry Cheesecake",
      "price": "1000",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Mango Cheesecake",
      "price": "1000",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Kaju Barfi Cake",
      "price": "650",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Rasmalai Cake.",
      "price": "450",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Gulab Jamun Red Velvet Cake.",
      "price": "750",
      "image": "/images/products/pool_table_reszied.jpg"
  },
  {
      "name": "Gulab Jamun Vanilla Cake",
      "price": "519",
      "image": "/images/products/pool_table_reszied.jpg"
  }
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
  { name: 'Fog Effect', price: 750, image: '/images/products/pool_table_reszied.jpg', isSelected: false },
  { name: 'Photo Clippings', price: 300, image: '/images/products/pool_table_reszied.jpg', isSelected: false },
  { name: 'Rose Petal Entry', price: 150, image: '/images/products/pool_table_reszied.jpg' },
  { name: 'Rose Heart', price: 350, image: '/images/products/pool_table_reszied.jpg', isSelected: false },
  { name: 'Single Rose', price: 50, image: '/images/products/pool_table_reszied.jpg', isSelected: false },
  { name: 'Rose Bouquet', price: 350, image: '/images/products/pool_table_reszied.jpg', isSelected: false }
  // Add more decorations as needed
];



export default function BookingModal({ open, onClose, onSubmit }) {
  const theme = useTheme();
  const [activePage, setActivePage] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState({ open: false, message: '' });

  

  const [formData, setFormData] = useState({
    date: '',
    slot: '',
    numberOfPersons: '',
    selectedCake: null,
    selectedDecoration: null,
    decorationName: '',
  });

  const handleInputChange = (name, value) => {
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeMax = (name, value, max) => {
    // Check if the input length is within the allowed limit
    if (value.length <= max) {
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
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const handleInputChangeAddon = (index) => {
    addonsData[index].isSelected = addonsData[index].isSelected ? false : true;
  }

  const handleProceedToPay = () => {

    if (activePage === 5 && !formData.name) {
      // Display error message or take appropriate action
      alert('Please enter the name.');
      return;
    }

    if (activePage === 5 && !formData.phoneNumber) {
      // Display error message or take appropriate action
      alert('Please enter the phoneNumber.');
      return;
    }
    // Add logic to submit the form data to the server
    console.log("Form data submitted:", formData);
    // Add any additional logic for payment processing here
    handleClickOpen();
    // Close the modal after payment processing
    // onClose();
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
    if (formData.selectedDecoration != null) total += decorationsData[formData.selectedDecoration].price;
    if (formData.selectedCake != null) total += cakesData[formData.selectedCake].price;
    addonsData.forEach(data => {
      total += data.isSelected ? data.price : 0;
    });
    return total;
  };



  const [openAgreement, setOpenAgreement] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleClickOpen = () => {
    setOpenAgreement(true);
  };

  const handleClose = () => {
    setOpenAgreement(false);
  };

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const handleAgree = () => {
    // Add your logic for handling the agreement
    if (agreed) {
      // User has agreed, you can perform further actions
      alert('Thank you for agreeing to the terms!');
      handleClose();
    } else {
      // User has not agreed, show an alert or handle accordingly
      alert('Please agree to the terms before proceeding.');
    }
  };
  const currentDate = new Date().toISOString().split('T')[0];


  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" sx={{padding: '0px'}}>
        <DialogContent sx={{padding: '0px'}}>
          {activePage === 1 && (
            <div sx={{padding: '0px'}}>
              {/* Page 1: Date Picker, Slots, and Number of Persons */}
              <DialogTitle sx={{paddingTop: '0 px', backgroundColor: theme.palette.secondary.main }}>Pick Your Slot and number of seats</DialogTitle>
              <Container sx={{paddingLeft: '20px', paddingRight: '20px'}}>
              <TextField
                // label="Select Date"
                type="date"
                fullWidth
                margin="normal"
                value={formData.date}
                inputProps={{
                  min: currentDate, // Set min attribute to current date
                }}
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
              </Container>
            </div>
          )}

          {activePage === 2 && (
            <div>
              <DialogTitle sx={{paddingTop: '0px', backgroundColor: theme.palette.secondary.main }}>Pick Your Celebration(Optional)</DialogTitle>
              <Grid container spacing={2} sx={{padding: '20px'}}>
                {/* Page 2: Decorations with Text Box */}

                {decorationsData.map((decoration, index) => (
                  <Grid item key={index} xs={6} md={4}>
                    <Card
                      onClick={() => handleInputChange('selectedDecoration', index)}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: formData.selectedDecoration === index ? theme.palette.primary.main : theme.palette.secondary.main,
                      }}
                    >
                      <CardMedia component="img" height="140" image={decoration.image} alt={decoration.name} />
                      <CardContent>
                        <Typography variant="body2" color="white">
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
                      onChange={(e) => handleInputChangeMax('decorationName', e.target.value, 8)}
                    />
                  </Grid>
                )}
              </Grid>
            </div>
          )}

          {activePage === 3 && (
            <div>
              <DialogTitle sx={{paddingTop: '0px', backgroundColor: theme.palette.secondary.main }}>Pick Your Cake(Optional)</DialogTitle>
              <Grid container spacing={2} sx={{padding: '20px'}}>
                {/* Page 3: Cakes */}

                {cakesData.map((cake, index) => (
                  <Grid item key={index} xs={6} md={4}>
                    <Card onClick={() => handleInputChange('selectedCake', index)} style={{ cursor: 'pointer', backgroundColor: formData.selectedCake === index ? theme.palette.primary.main : theme.palette.secondary.main, }}>
                      <CardMedia component="img" height="140" image={cake.image} alt={cake.name} />
                      <CardContent>
                        <Typography variant="body2" color="white">
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
              <DialogTitle sx={{paddingTop: '0px', backgroundColor: theme.palette.secondary.main }}>Decoration Add-ons</DialogTitle>
              <Grid container spacing={2} sx={{padding: '20px'}}>
                {/* Page 4: Decorations */}

                {addonsData.map((decoration, index) => (
                  <Grid item key={index} xs={6} md={4}>
                    <Card onClick={() => handleInputChangeAddon(index)} style={{ cursor: 'pointer', backgroundColor: addonsData[index].isSelected ? theme.palette.primary.main : theme.palette.secondary.main, }}>
                      <CardMedia component="img" height="140" image={decoration.image} alt={decoration.name} />
                      <CardContent>
                        <Typography variant="body2" color="white">
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
                  <Typography variant="body1">Decoration: {formData.selectedDecoration !== null && decorationsData[formData.selectedDecoration].name}</Typography>
                  <Typography variant="body1">Name: {formData.decorationName}</Typography>
                  <Typography variant="body1">Cake: {formData.selectedCake !== null && cakesData[formData.selectedCake].name}</Typography>
                  <Typography variant="body1">Add-on: {addonsData.map((item, index) => (
                    item.isSelected && (
                      <Chip
                        key={index}
                        label={item.name}
                        color="primary"  // Customize the chip color as needed
                        style={{ margin: '4px' }}
                      />
                    )
                  ))}</Typography>
                  {/* Display other form data as needed */}
                </Grid>
                <Grid item xs={6}>
                  {/* User info input fields */}
                  <TextField
                    label="Name (Max 15 chars) *"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    oinputProps={{ maxLength: 15 }}
                    onChange={(e) => handleInputChangeMax('name', e.target.value, 15)}
                  />
                  <TextField
                    label="WhatsApp Phone Number (Max 10 chars) *"
                    fullWidth
                    margin="normal"
                    value={formData.phoneNumber}
                    inputProps={{ maxLength: 10, type: 'number' }}
                    onChange={(e) => handleInputChangeMax('phoneNumber', e.target.value, 10)}
                  />
                  <TextField
                    label="Email ID"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    inputProps={{ type: 'email' }}
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
      <Dialog open={openAgreement} onClose={handleClose} fullWidth maxWidth="sm" sx={{ color: theme.palette.primary.main, backgroundColor: theme.palette.secondary.main }}>
        <DialogTitle>Important Instructions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ol>
              <li>Refund Policy: Partial advance amount (Rs 500/-) will be refundable if you cancel the slot at least 72 hours prior to your booking time.</li>
              <li>Smoking and Consumption of Alcohol is strictly prohibited inside the Theaters.</li>
              <li>You need to bring your own OTT accounts to watch the content.</li>
              <li>Party poppers, foam, and Champaigne are not allowed inside the theaters, considering the sensitivity of the Theaters.</li>
              <li>Outside food is strictly prohibited, considering the sensitivity of carpets and recliners inside the Theaters.</li>
              <li>We charge full for children above or equal to 5 years and half for those who are below 5 years.</li>
              <li>Right to admission is reserved by the Management.</li>
            </ol>
          </DialogContentText>
          <FormControlLabel
            control={<Checkbox checked={agreed} onChange={handleCheckboxChange} />}
            label="I agree to the terms and conditions"
          />
        </DialogContent>
        <div style={{ padding: '16px' }}>
          <Button onClick={handleAgree} color="primary" variant="contained" disabled={!agreed}>
            Agree
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
