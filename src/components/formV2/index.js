import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Grid, List, ListItem, ListItemText, Divider, Stepper, Step, StepLabel, Card, CardContent, CardMedia, Typography, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './MultiStepForm.css';
import NavigationHeader from '../headerV2';
import {content} from '../../common/dataV2'

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        theater: '',
        date: '',
        slot: {},
        name: '',
        numberOfPeople: 2,
        whatsappNumber: '',
        email: '',
        celebrationType: '',
        celebrationPersonName: '',
        extraDecoration: [],
        chooseGifts: [],
        specialServices: [],
        agreeTerms: false,
        choosePro: false,
    });
    const [errors, setErrors] = useState({});
    const [totalCost, setTotalCost] = useState(1500);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [availableDates, setAvailableDates] = useState([]);

    const steps = ['Theater & Slot', 'Booking Details', 'Celebration Type', 'Choose Pro', 'Add-ons', 'Book'];
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setFormData({ ...formData, date });
        let slots = [{ "duration": '9:00 AM to 12:00 PM', isAvailable: true }, { "duration": '1:00 PM to 4:00 PM', isAvailable: true }, { "duration": '5:00 PM to 8:00 PM', isAvailable: true }, { "duration": '9:00 PM to 10:30 PM', isAvailable: true }, { "duration": '11:00 PM to 12:30 AM', isAvailable: true }];
        availableDates[date.toISOString().split('T')[0]].forEach(val => slots[val - 1].isAvailable = false);
        setAvailableSlots(slots);
    };

    const validateStep = () => {
        let newErrors = {};
        if (currentStep === 1) {
            if (!formData.theater) newErrors.theater = 'Theater is required';
            if (!formData.date) newErrors.date = 'Date is required';
            if (!formData.slot) newErrors.slot = 'Slot is required';
        }
        if (currentStep === 2) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.numberOfPeople || formData.numberOfPeople > 12) newErrors.numberOfPeople = 'Number of people is required';
            if (!formData.whatsappNumber || formData.whatsappNumber.length !== 10) newErrors.whatsappNumber = 'Valid WhatsApp number is required';
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        }
        if (currentStep === 3) {
            if (!formData.celebrationType) newErrors.celebrationType = 'Celebration type is required';
            if (!formData.celebrationPersonName) newErrors.celebrationPersonName = 'Celebration person name is required';
            if (['marriage proposal', 'romantic date', 'anniversary'].includes(formData.celebrationType) && !formData.celebrationPersonName) {
                newErrors.celebrationPersonName = 'Celebration person name is required';
            }
        }
        if (currentStep === 6) {
            if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setCurrentStep(prevStep => prevStep + 1);
        }
    };

    const handlePrevious = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleTheaterSelect = (theater) => {
        setFormData({ ...formData, theater });
        // API call to get available dates and slots
        axios.get(`http://localhost:3001/api/available-slots?theater=${theater}`)
            .then(response => {
                setAvailableDates(response.data);
                let slots = [{ "duration": '9:00 AM to 12:00 PM', isAvailable: true }, { "duration": '1:00 PM to 4:00 PM', isAvailable: true }, { "duration": '5:00 PM to 8:00 PM', isAvailable: true }, { "duration": '9:00 PM to 10:30 PM', isAvailable: true }, { "duration": '11:00 PM to 12:30 AM', isAvailable: true }];
                response.data[new Date().toISOString().split('T')[0]].forEach(val => {
                    slots[val - 1].isAvailable = false;
                });
                setAvailableSlots(slots);
            });
    };

    const handleSlotChange = (date, slot) => {
        console.log('slot change'+slot.isAvailable);
        if(slot.isAvailable)
            setFormData({ ...formData, date, slot });
    };

    const handlePeopleChange = (event) => {
        setTotalCost(totalCost  - (formData.numberOfPeople * 250) + (event.target.value * 250));
        const numberOfPeople = event.target.value;
        setFormData({ ...formData, numberOfPeople });
    };

    const handleAddOnChange = (category, item) => {
        setFormData(prevState => {
            const updatedCategory = prevState[category].includes(item)
                ? prevState[category].filter(i => i !== item)
                : [...prevState[category], item];
            return { ...prevState, [category]: updatedCategory };
        });
        // Update the cost accordingly (this is a simple example, adjust as needed)
        setTotalCost(prevCost => prevCost + (formData[category].includes(item) ? -item.price : item.price));
    };

    const handleUpgradeToPro = (event) => {
        setFormData({ ...formData, choosePro: event.target.checked })
        event.target.checked?setTotalCost(totalCost + 1000): setTotalCost(totalCost - 1000);
    };
    const otherAddOns = content.formDetail.otherAddOns;
    return (
        <div>
            <NavigationHeader />
            <div className="multi-step-form">
                <div className="form-image">
                    {formData.theater !== 'Floral Celebration' && <img src="/images/products/hero_first.webp" alt="Form illustration" />}
                    {formData.theater === 'Floral Celebration' && <img src="/images/products/hero_2.webp" alt="Form illustration" />}
                </div>
                <div className="form-container">
                    <div className="form-header">
                        <Stepper activeStep={currentStep - 1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                    <div className="form-content">
                        {currentStep === 1 && (
                            <div className="form-step">
                                <h2>Theater & Slot</h2>
                                <Typography variant="h6">Available Locations {errors.theater}</Typography>
                                <div className="theater-selection">
                                    <Card sx={{ backgroundColor: formData.theater === 'Balloon Celebration' ? 'rgb(25, 118, 210)' : 'white' }} onClick={() => handleTheaterSelect('Balloon Celebration')}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/images/products/hero_first.webp"
                                            alt="Balloon Celebration"
                                        />
                                        <CardContent>
                                            <Typography variant="h6">Balloon Celebration</Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ backgroundColor: formData.theater === 'Floral Celebration' ? 'rgb(25, 118, 210)' : 'white' }} onClick={() => handleTheaterSelect('Floral Celebration')}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/images/products/hero_2.webp"
                                            alt="Floral Celebration"
                                        />
                                        <CardContent>
                                            <Typography variant="h6">Floral Celebration</Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="calendar-slots">
                                    <Typography variant="h6">Available Dates</Typography>
                                    {/* {availableDates.map(date => (
                                    <div key={date} className={`date ${formData.date === date ? 'selected' : ''}`} onClick={() => handleSlotChange(date, formData.slot)}>
                                        {date}
                                    </div>
                                ))} */}

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar disablePast onChange={(date) => handleDateChange(date)} />
                                    </LocalizationProvider>

                                    <Typography variant="h6">Available Slots {errors.slot}</Typography>
                                    {availableSlots.map(slot => (
                                        <div key={slot.duration} className={`slot ${formData.slot === slot ? 'selected' : ''} ${slot.isAvailable === false ? 'disabled' : ''}`} onClick={() => handleSlotChange(formData.date, slot)}>
                                            {slot.duration}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentStep === 2 && (
                            <div className="form-step">
                                <h2>Booking Details</h2>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    fullWidth
                                    required
                                    inputProps={{ maxLength: 20 }}
                                />
                                <TextField
                                    label="Number of People"
                                    variant="outlined"
                                    type="number"
                                    value={formData.numberOfPeople}
                                    onChange={handlePeopleChange}
                                    error={!!errors.numberOfPeople}
                                    helperText={errors.numberOfPeople}
                                    fullWidth
                                    required
                                    inputProps={{ min: 2, max: 12 }}
                                />
                                <TextField
                                    label="WhatsApp Number"
                                    variant="outlined"
                                    type="number"
                                    value={formData.whatsappNumber}
                                    onChange={e => setFormData({ ...formData, whatsappNumber: e.target.value })}
                                    error={!!errors.whatsappNumber}
                                    helperText={errors.whatsappNumber}
                                    fullWidth
                                    required
                                    inputProps={{ max: 999999999 }}
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    fullWidth
                                    required
                                    inputProps={{ maxLength: 30 }}
                                />
                            </div>
                        )}
                        {currentStep === 3 && (
                            <div className="form-step">
                                <h2>Celebration Type</h2>
                                <div className="celebration-type-selection">
                                <Grid container spacing={1}>
                                    {['birthday', 'anniversary', 'romantic date', 'marriage proposal', 'bride to be', 'farewell', 'congratulations', 'baby shower'].map(type => (
                                        <Grid item xs={4}>
                                        <Card sx={{ backgroundColor: formData.celebrationType === type ? 'rgb(25, 118, 210)' : 'white' }} key={type} onClick={() => setFormData({ ...formData, celebrationType: type })}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/images/products/hero_first.webp"
                                                alt="Balloon Celebration"
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{type}</Typography>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                    ))}
                                    </Grid>
                                </div>
                                <TextField
                                    label="Celebration Person Name"
                                    variant="outlined"
                                    value={formData.celebrationPersonName}
                                    onChange={e => setFormData({ ...formData, celebrationPersonName: e.target.value })}
                                    error={!!errors.celebrationPersonName}
                                    helperText={errors.celebrationPersonName}
                                    fullWidth
                                    required
                                    inputProps={{ maxLength: 8 }}
                                />
                                {['marriage proposal', 'romantic date', 'anniversary'].includes(formData.celebrationType) && (
                                    <>
                                        <TextField
                                            label="Partner's Name"
                                            variant="outlined"
                                            value={formData.partnerName}
                                            onChange={e => setFormData({ ...formData, partnerName: e.target.value })}
                                            fullWidth
                                            required
                                            inputProps={{ maxLength: 8 }}
                                        />
                                    </>
                                )}
                            </div>
                        )}
                        {currentStep === 4 && (
                            <div className="form-step">
                                <h2>Choose Pro</h2>

                                <Typography variant="h6" gutterBottom>
                                    Take Your celebration by choosing pro
                                </Typography>
                                <FormControlLabel
                                    control={<Checkbox checked={formData.choosePro} onChange={e => handleUpgradeToPro(e)} />}
                                    label="Upgrade your package to pro @ 1000"
                                />
                                <Grid container spacing={1}>
                                    {['Photography (15min)', 'Complimentary F&B', 'Fog Effect', 'Balloon Bouqet', 'Floral Bouqet', 'More Props'].map(item => (
                                        <Grid item xs={6}>
                                        <Card sx={{ backgroundColor: formData['choosePro'] ? 'rgb(25, 118, 210)' : 'white' }} xs={4} key={item} >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/images/products/hero_3.webp"
                                                alt="Balloon Celebration"
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{item}</Typography>
                                            </CardContent>
                                        </Card> </Grid>))}
                                        
                                </Grid>
                                <FormControlLabel
                                    control={<Checkbox checked={formData.choosePro} onChange={e => setFormData({ ...formData, choosePro: e.target.checked })} />}
                                    label="Upgrade your package to pro @ 1000"
                                />

                            </div>
                        )}
                        {currentStep === 5 && (
                            <div className="form-step">
                                <Typography variant="h3">Add ons</Typography>
                                <div className="add-on-selection">
                                    <Typography variant="h4">{otherAddOns[0].title}</Typography>
                                    <Grid container spacing={1}>
                                    {otherAddOns[0].addOns.map(item => (
                                        <Grid item xs={4}>
                                        <Card sx={{ backgroundColor: formData['extraDecoration'].includes(item) ? 'rgb(25, 118, 210)' : 'white' }} key={item.title} onClick={() => handleAddOnChange('extraDecoration', item)}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/images/products/hero_first.webp"
                                                alt="Balloon Celebration"
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{item.title}</Typography>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                    ))}
                                    </Grid>
                                </div>
                                <div className="add-on-selection">
                                    <Typography variant="h4">Choose Gifts</Typography>
                                    <Grid container spacing={1}>
                                    {otherAddOns[1].addOns.map(item => (
                                        <Grid item xs={4}>
                                        <Card sx={{ backgroundColor: formData['chooseGifts'].includes(item) ? 'rgb(25, 118, 210)' : 'white' }} key={item.title} onClick={() => handleAddOnChange('chooseGifts', item)}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/images/products/hero_2.webp"
                                                alt="Balloon Celebration"
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{item.title}</Typography>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                    ))}
                                    </Grid>
                                </div>
                                <div className="add-on-selection">
                                    <Typography variant="h4">Special Services</Typography>
                                    <Grid container spacing={1}>
                                    {otherAddOns[2].addOns.map(item => (
                                        <Grid item xs={4}>
                                        <Card sx={{ backgroundColor: formData['specialServices'].includes(item) ? 'rgb(25, 118, 210)' : 'white' }} key={item.title} onClick={() => handleAddOnChange('specialServices', item)}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/images/products/hero_3.webp"
                                                alt="Balloon Celebration"
                                            />
                                            <CardContent>
                                                <Typography variant="h6">{item.title}</Typography>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                    ))}
                                    </Grid>
                                </div>
                            </div>
                        )}

                        {currentStep === 6 && (
                            <div className="form-step">
                                <h2>Book</h2>
                                <Box sx={{ margin: 'auto', padding: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Summary
                                    </Typography>
                                    <List sx={{width: '40vw'}}>
                                        <ListItem>
                                            <ListItemText primary={'Package'} />
                                            <Typography variant="body2">{(formData.choosePro?'Pro ':'')+ formData.theater + ' ' + formData.celebrationType.toUpperCase()}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={'Date & Duration'} />
                                            <Typography variant="body2">{formData.date.toISOString().split('T')[0] + ' ' + formData.slot.duration}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={'Number of Guests'} />
                                            <Typography variant="body2">{formData.numberOfPeople}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={'Email'} />
                                            <Typography variant="body2">{formData.email}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={'Phone Number'} />
                                            <Typography variant="body2">{formData.whatsappNumber}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={'Celebration Name'} />
                                            <Typography variant="body2">{formData.celebrationPersonName}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={'Package Cost'} />
                                            <Typography variant="body1">{1500+(formData.choosePro?1000:0)}</Typography>
                                        </ListItem>
                                        { formData['extraDecoration'].length > 0 && <ListItem>
                                            <ListItemText primary={'Extra Decoration Cost'} secondary={formData['extraDecoration'].reduce((sum, { title }) => sum + title +',', '').slice(0, -1)} />
                                            <Typography variant="body1">{formData['extraDecoration'].reduce((sum, { price }) => sum + price, 0)}</Typography>
                                        </ListItem>}
                                        { formData['chooseGifts'].length > 0 &&<ListItem>
                                            <ListItemText primary={'Gifts Cost'} secondary={formData['chooseGifts'].reduce((sum, { title }) => sum + title +',', '').slice(0, -1)}/>
                                            <Typography variant="body1">{formData['chooseGifts'].reduce((sum, { price }) => sum + price, 0)}</Typography>
                                        </ListItem>}
                                        { formData['specialServices'].length > 0 &&<ListItem>
                                            <ListItemText primary={'Special Services Cost'} secondary={formData['specialServices'].reduce((sum, { title }) => sum + title +',', '').slice(0, -1)}/>
                                            <Typography variant="body1">{formData['specialServices'].reduce((sum, { price }) => sum + price, 0)}</Typography>
                                        </ListItem>}
                                    </List>
                                    {/* <List>
                                        {Object.entries(formData).map(([itemName, itemPrice], index) => (
                                            <React.Fragment key={index}>
                                                <ListItem>
                                                    <ListItemText primary={itemName.toUpperCase()} />
                                                    <Typography variant="body2">{`${itemPrice}`}</Typography>
                                                </ListItem>
                                                {index < Object.entries(formData).length - 1 && <Divider />}
                                            </React.Fragment>
                                        ))}
                                    </List> */}
                                    
                                </Box>
                                <div className="terms-section">
                                    <Typography variant="h6">Terms and Conditions</Typography>
                                    <Typography variant="body2">1. We do NOT provide any movie/OTT accounts. We will do the setups using your OTT accounts/downloaded content.
                                        Smoking/Drinking is NOT allowed inside the theater.</Typography>
                                    <Typography variant="body2">2. Any DAMAGE caused to theater, including decorative materials like ballons, lights etc will have to be reimbursed.</Typography>
                                    <Typography variant="body2">3. Guests are requested to maintain CLEANLINESS inside the theater.</Typography>
                                    <Typography variant="body2">4. Party poppers/Snow sprays/Cold Fire, and any other similar items are strictly prohibited inside the theater.</Typography>
                                    <Typography variant="body2">5. Carrying AADHAAR CARD is mandatory. It will be scanned during entry.</Typography>
                                    <Typography variant="body2">6. Couples under 18 years of age are not allowed to book the theatre</Typography>
                                    <Typography variant="body2">7. Pets are strictly not allowed inside the theatre. </Typography>
                                    <Typography variant="body2">8. We collect an advance amount of RS. 750 plus convenience fee to book the slot.</Typography>
                                    <Typography variant="h6">Refund Policy</Typography>
                                    <Typography variant="body2">Advance amount is fully refundable if slot is cancelled at least 72 hrs before the slot time. If your slot is less than 72 hrs away from time of payment then advance is non-refundable.</Typography>
                                    <FormControlLabel
                                        control={<Checkbox checked={formData.agreeTerms} onChange={e => setFormData({ ...formData, agreeTerms: e.target.checked })} />}
                                        label="I agree to the terms and conditions"
                                    />
                                </div>
                                
                            </div>
                        )}
                    </div>
                    <div className="bottom-info">
                        {totalCost > 0 && (
                            <div className="total-cost">
                                <Typography variant="h6">Total Cost: ₹{totalCost}</Typography>
                            </div>
                        )}

                        <div className="form-navigation">
                            {currentStep > 1 && (
                                <Button variant="contained" onClick={handlePrevious}>
                                    Previous
                                </Button>
                            )}
                            {currentStep < steps.length && (
                                <Button variant="contained" onClick={handleNext}>
                                    Next
                                </Button>
                            )}
                            {currentStep === steps.length && (
                                <Button variant="contained" onClick={() => alert('Booking Confirmed')}>
                                    Pay and Book
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
