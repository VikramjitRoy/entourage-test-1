import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Stepper, Step, StepLabel, Card, CardContent, CardMedia, Typography, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './MultiStepForm.css';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        theater: '',
        date: '',
        slot: '',
        name: '',
        numberOfPeople: 2,
        whatsappNumber: '',
        email: '',
        celebrationType: '',
        celebrationPersonName: '',
        extraDecoration: [],
        chooseGifts: [],
        specialServices: [],
        agreeTerms: false
    });
    const [errors, setErrors] = useState({});
    const [totalCost, setTotalCost] = useState(0);
    const [availableSlots, setAvailableSlots] = useState([{"duration":'9:00 AM to 12:00 PM', isAvailable: false}, {"duration":'1:00 PM to 4:00 PM', isAvailable: true},{"duration":'5:00 PM to 8:00 PM', isAvailable: true},{"duration":'9:00 PM to 10:30 PM', isAvailable: true},{"duration":'11:00 PM to 12:30 AM', isAvailable: true}]);
    const [availableDates, setAvailableDates] = useState([]);

    const steps = ['Theater & Slot', 'Booking Details', 'Celebration Type', 'Add-ons', 'Book'];
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log('Selected date is today!');
    };

    const validateStep = () => {
        let newErrors = {};
        if (currentStep === 1) {
            if (!formData.theater) newErrors.theater = 'Theater is required';
            // if (!formData.date) newErrors.date = 'Date is required';
            if (!formData.slot) newErrors.slot = 'Slot is required';
        }
        if (currentStep === 2) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.numberOfPeople) newErrors.numberOfPeople = 'Number of people is required';
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
        if (currentStep === 5) {
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
        axios.get(`localhost:3001/api/available-slots?theater=${theater}`)
            .then(response => {
                setAvailableDates(response.data.dates);
                setAvailableSlots(response.data.slots);
            });
    };

    const handleSlotChange = (date, slot) => {
        if(slot.isAvailable)
            setFormData({ ...formData, date, slot });
    };

    const handlePeopleChange = (event) => {
        const numberOfPeople = event.target.value;
        setFormData({ ...formData, numberOfPeople });
        setTotalCost(numberOfPeople * 150); // Assuming cost is 150 per person
    };

    const handleAddOnChange = (category, item) => {
        setFormData(prevState => {
            const updatedCategory = prevState[category].includes(item)
                ? prevState[category].filter(i => i !== item)
                : [...prevState[category], item];
            return { ...prevState, [category]: updatedCategory };
        });
        // Update the cost accordingly (this is a simple example, adjust as needed)
        setTotalCost(prevCost => prevCost + (formData[category].includes(item) ? -100 : 100));
    };

    return (
        <div className="multi-step-form">
            <div className="form-image">
                <img src="/images/products/hero_first.webp" alt="Form illustration" />
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
                            <div className="theater-selection">
                                <Card sx={{backgroundColor: formData.theater === 'Balloon Celebration' ? 'rgb(25, 118, 210)' : 'white'}} onClick={() => handleTheaterSelect('Balloon Celebration')}>
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
                                <Card sx={{backgroundColor: formData.theater === 'Floral Celebration' ? 'rgb(25, 118, 210)' : 'white'}} onClick={() => handleTheaterSelect('Floral Celebration')}>
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
      <DateCalendar disablePast
      onChange={(date) => handleDateChange(date)} />
    </LocalizationProvider>
                           
                                <Typography variant="h6">Available Slots</Typography>
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
                            />
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="form-step">
                            <h2>Celebration Type</h2>
                            <div className="celebration-type-selection">
                                {['birthday', 'anniversary', 'romantic date', 'marriage proposal', 'bride to be', 'farewell', 'congratulations', 'baby shower'].map(type => (
                                    <Card key={type} onClick={() => setFormData({ ...formData, celebrationType: type })}>
                                        <CardContent>
                                            <Typography variant="h6">{type}</Typography>
                                        </CardContent>
                                    </Card>
                                ))}
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
                                    />
                                    <TextField
                                        label="Anniversary Date"
                                        variant="outlined"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.anniversaryDate}
                                        onChange={e => setFormData({ ...formData, anniversaryDate: e.target.value })}
                                        fullWidth
                                        required
                                    />
                                </>
                            )}
                        </div>
                    )}
                    {currentStep === 4 && (
                        <div className="form-step">
                            <h2>Add-ons</h2>
                            <div className="add-on-selection">
                                <Typography variant="h6">Extra Decoration</Typography>
                                {['Rose Heart', 'Candle Path', 'Led Numbers'].map(item => (
                                    <Card key={item} onClick={() => handleAddOnChange('extraDecoration', item)}>
                                        <CardContent>
                                            <Typography variant="h6">{item}</Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="add-on-selection">
                                <Typography variant="h6">Choose Gifts</Typography>
                                {['Rose Bouquet', 'Teddy Bear', 'Small Heart Pillow'].map(item => (
                                    <Card key={item} onClick={() => handleAddOnChange('chooseGifts', item)}>
                                        <CardContent>
                                            <Typography variant="h6">{item}</Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="add-on-selection">
                                <Typography variant="h6">Special Services</Typography>
                                {['Photography (15min)', 'Photography (30min)', 'Fog Effect'].map(item => (
                                    <Card key={item} onClick={() => handleAddOnChange('specialServices', item)}>
                                        <CardContent>
                                            <Typography variant="h6">{item}</Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                    {currentStep === 5 && (
                        <div className="form-step">
                            <h2>Book</h2>
                            <div className="terms-section">
                                <Typography variant="body1">Terms and Conditions</Typography>
                                {/* Add your terms and conditions here */}
                                <Typography variant="body1">Refund Policy</Typography>
                                {/* Add your refund policy here */}
                                <FormControlLabel
                                    control={<Checkbox checked={formData.agreeTerms} onChange={e => setFormData({ ...formData, agreeTerms: e.target.checked })} />}
                                    label="I agree to the terms and conditions"
                                />
                            </div>
                        </div>
                    )}
                    {totalCost > 0 && (
                        <div className="total-cost">
                            <Typography variant="h6">Total Cost: ${totalCost}</Typography>
                        </div>
                    )}
                </div>
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
    );
};

export default MultiStepForm;
