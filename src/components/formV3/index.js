import React, { useState, useEffect } from 'react';
import { Chip, Backdrop, CircularProgress, ButtonGroup, Select, MenuItem, InputLabel, TextField, Button, Box, Grid, List, ListItem, ListItemText, Stepper, Step, StepLabel, Card, CardContent, CardMedia, Typography, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './MultiStepForm.css';
import NavigationHeader from '../headerV2';
import {content} from '../../common/dataV2';


const MultiStepForm = () => {
	
	const [availableDates, setAvailableDates] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        location: 'HSR',
        theater: 'BALLOON',
        date: null,
		slot: '',
        name: '',
        numberOfPeople: 2,
        whatsappNumber: '',
        email: '',
        celebrationType: 'Birthday',
        celebrationPersonName: '',
        extraDecoration: [],
        chooseGifts: [],
        specialServices: [],
        agreeTerms: false,
        choosePro: false,
		offeringName: '',
		arch: null,
		basePrice: 0,
		proPrice: 0,
    });
    const [errors, setErrors] = useState({});
    const [totalCost, setTotalCost] = useState(0);
    const [availableSlots, setAvailableSlots] = useState(null);
    const [celebrationType, setCelebrationType] = useState('Birthday');
    const [arch, setArch] = useState('');
	const [loading, setLoading] = useState(true);

    const steps = ['Theater & Slot', 'Booking Details', 'Celebration Type', 'Add-ons', 'Book'];
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [bookingId, setBookingId] = useState();
    const [slotId, setSlotId] = useState(-1);

	useEffect(() => {

		const fetchData = async () => {
			try {
			  let fullDate = new Date().toISOString().split('T')[0];
        	  let fullDateSplit = fullDate.split('-');
			  const response = await axios.get(`https://us-central1-flickstones.cloudfunctions.net/api/v1/slots/available?year=${fullDateSplit[0]}&month=${fullDateSplit[1]}`); 
			  setAvailableSlots(response.data); 
			  setLoading(false); 
			} catch (err) {
				setLoading(false);
			}
		  };
	  
		  fetchData();
    }, []);
 

    const handleDateChange = (date) => {
        date = new Date(date);
        setSelectedDate(date);
        setFormData({ ...formData, date });
    };

    const handleChange = (event) => {
        setFormData({ ...formData, celebrationType: event.target.value});
        setCelebrationType(event.target.value);
    };
	const handleArchChange = (event) => {
        setFormData({ ...formData, arch: event.target.value});
        setArch(event.target.value);
    };

    const validateStep = () => {
        let newErrors = {};
        if (currentStep === 1) {
            if (!formData.theater) newErrors.theater = 'Theater is required';
            if (!formData.date) newErrors.date = 'Date is required';
			if (!formData.celebrationType) newErrors.celebrationType = 'Celebration type is required';
			if (!formData.numberOfPeople || formData.numberOfPeople > 12) newErrors.numberOfPeople = 'Number of people is required';
        }
        if (currentStep === 2) {
			if (Object.keys(formData.slot).length === 0) newErrors.slot = 'Slot is required';
        }
        if (currentStep === 3) {
			if (!formData.whatsappNumber || formData.whatsappNumber.length !== 10) newErrors.whatsappNumber = 'Valid WhatsApp number is required';
			if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
            if (!formData.celebrationPersonName) newErrors.celebrationPersonName = 'Celebration person name is required';
            if (['Marriage Proposal', 'Romantic Date', 'Anniversary'].includes(formData.celebrationType) && !formData.celebrationPersonName) {
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

    const handleLocationSelect = (location) => {
        setFormData({...formData, location});
    }
    
    const doBooking = () => {
		setLoading(true);
        if(validateStep()){
        let bookingDetail = {
            ...formData,
            totalCost: totalCost,
            slotId: slotId
        };
        axios.post(`https://us-central1-flickstones.cloudfunctions.net/api/v1/booking`, bookingDetail)
            .then(response => {
                if(response?.data?.bookingId)
                    setCurrentStep(prevStep => prevStep + 1);
                    setBookingId(response.data.bookingId);
				setLoading(false);
            });
        }
    };

    const handlePeopleChange = (event) => {
        
        setTotalCost(totalCost  - (Math.max((formData.numberOfPeople - 5), 0) * 250) + (Math.max(event.target.value - 5,0) * 250));
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

    const handleUpgradeToPro = (event, offering) => {
		const proPrice = getProPrice(offering);
        setFormData({ ...formData, choosePro: event.target.checked, proPrice });
        event.target.checked?setTotalCost(totalCost + proPrice): setTotalCost(totalCost - proPrice);
    };

	const getProPrice = (offering) => {
		return formData.numberOfPeople > 2? offering.proGroupPrice: offering.proCouplePrice;
	};

const otherAddOns = content.formDetail.otherAddOns;
    const supportedPins = ['560095', '560102'];
    const checkPin = (event) => {
        if(event.target.value.length < 6) return true;
        if(supportedPins.includes(event.target.value)) {
            setFormData({ ...formData, pin: event.target.value });
            errors.pin = null
        } else {
            errors.pin = "Service is not available for this pincode";
        }
        setErrors(errors);
    };

	const getPrice = (offering) => {
        let price = 0;
		if(offering.code === 'HOME') return offering.basePrice;
		if(formData.numberOfPeople > 2) {
			price = offering.groupPrice + (Math.max(formData.numberOfPeople - 5)* offering.extraPersonPrice);
		} else {
			price = offering.couplePrice;
		}
		return price;
    };

	const handleSlotChangeV2 = (slot, name, price) => {
		setTotalCost(totalCost + (formData.basePrice > 0?price - formData.basePrice:price));
		setFormData({ ...formData, slot, offeringName: name, basePrice: price });
	};
	

    return (
        <div>
            <NavigationHeader />
            <div className="multi-step-form">
                <div className="form-image">
                    {formData.theater !== 'Floral' && <img src="/images/new/balloon_portrait.jpg" alt="Form illustration" />}
                    {formData.theater === 'Floral' && <img src="/images/new/floral_red_decor_potrait.jpg" alt="Form illustration" />}
                </div>
                <div className="form-container">
				<Backdrop
					sx={{
					position: 'absolute',
					zIndex: 1,
					color: '#fff',
					display: loading ? 'flex' : 'none',
					}}
					open={loading}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
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
                                <Typography variant="h6">Choose Location {errors.theater}</Typography>
                                <div className="theater-selection">
									<ButtonGroup variant="contained" aria-label="Basic button group">
										<Button sx={{ backgroundColor: formData.location === 'HSR' ? 'rgb(25, 118, 210)' : 'grey' }} onClick={() => handleLocationSelect('HSR')}>Flickstones HSR</Button>
										<Button sx={{ backgroundColor: formData.location === 'HOME' ? 'rgb(25, 118, 210)' : 'grey' }} onClick={() => handleLocationSelect('HOME')}>Home Decoration</Button>
									</ButtonGroup>
                                </div>
                                {formData.location === 'HOME' && <TextField
                                    label="Choose PIN for home decoration"
                                    variant="outlined"
                                    value={formData.pin}
                                    onChange={e => checkPin(e)}
                                    error={!!errors.pin}
                                    helperText={errors.pin}
                                    fullWidth
                                    required
                                    inputProps={{ maxLength: 6 }}
                                />}
                                <div className="calendar-slots">
                                    <Typography variant="h6">Choose Date</Typography>
									{errors.date && <Typography variant="body1" sx = {{ color: 'red'}}>Date is required</Typography>}
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateCalendar disablePast onChange={(date) => handleDateChange(date)} />
                                    </LocalizationProvider>
                                </div>
								<TextField
                                    label="Number of People"
                                    variant="standard"
                                    type="number"
                                    value={formData.numberOfPeople}
                                    onChange={handlePeopleChange}
                                    error={!!errors.numberOfPeople}
                                    helperText={errors.numberOfPeople}
                                    fullWidth
                                    required
                                    inputProps={{ min: 2, max: 12 }}
                                />
								 <div className="celebration-type-selection">
									<Grid container spacing={1}>
										<InputLabel id="demo-simple-select-label" sx={{ m: 1, minWidth: 120 }}>Celebration Type</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={celebrationType}
											label="Celebration Type"
											onChange={handleChange}
										>
											{['Birthday', 'Anniversary', 'Romantic Date', 'Marriage Proposal', 'Bride To Be', 'Farewell', 'Congratulations', 'Baby Shower'].map(type => (
											<MenuItem key={type} value={type}>{type}</MenuItem>
											))}
										</Select>
									</Grid>
                                </div>
                            </div>
                        )}
                        {currentStep === 2 && (
                            <div className="form-step">
                                <h2>Showing Packages for You</h2>
								{errors.slot && <Typography variant="body1" sx = {{color: 'red'}}>{errors.slot}</Typography>}
                                {content.offering.filter(offering => offering.location.includes(formData.location) && offering.capacity >= formData.numberOfPeople)
								.map(offering =>  (
                                        <Grid item xs={6}>
                                            <Card sx={{ marginBottom: '2vh'}}>
												<CardMedia
													sx={{ height: 140 }}
													image={offering.imageUrl}
													title={offering.name}
												/>
												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
													{offering.name}
													</Typography>
													<Typography variant="body2" sx={{ color: 'text.secondary' }}>
													{offering.features.map(feature => (<Chip key={feature} size="small" sx = {{ margin: '2px'}} label={feature} />))}
													</Typography>
													<Typography variant="h6" sx={{ color: 'text.secondary' }}>
													Price: {getPrice(offering)}
													</Typography>
													<Typography variant="body2" sx={{ color: 'text.secondary' }}>
													{["10:30 AM to 12:30 AM",
														"01:30 PM to 03:30 PM",
														"04:30 PM to 06:30 PM",
														"07:30 PM to 09:30 PM",
														"10:30 PM to 12:30 PM"]
														.map((slot, index) => (
														<Chip key={slot} label={slot} 
															  clickable={true} 
															  variant={(slot  === formData.slot && offering.name === formData.offeringName)?'filled':'outlined'}
															  color="success" 
															  disabled={availableSlots[formData.date.getDate()][offering.code]?!availableSlots[formData.date.getDate()][offering.code].includes(index+1):true} 
															  sx= {{margin: '2px'}} 
															  onClick={() => handleSlotChangeV2(slot, offering.name, getPrice(offering))} />))}
			
													</Typography>
													{ offering.proInclusions && <FormControlLabel
                                    control={<Checkbox checked={formData.choosePro} onChange={e => handleUpgradeToPro(e, offering)} />}
                                    label={"Upgrade to dream pack including " + offering.proInclusions + " at " + getProPrice(offering) + " only"}
                                /> }

							{offering.arch.lengh > 0 && <div className="celebration-type-selection">
									<Grid container spacing={1}>
										<InputLabel id="arch-select-label">Choose Your Arch</InputLabel>
										<Select
											labelId="arch-select-label"
											id="arch-select"
											value={arch}
											label="Arch Type"
											onChange={handleArchChange}
										>
											{offering.arch.map(type => (
											<MenuItem key={type} value={type}>{type}</MenuItem>
											))}
										</Select>
									</Grid>
                                </div>}
												</CardContent>
											</Card>
										</Grid>
                                    ))}
                                
                            </div>
                        )}
                        {currentStep === 3 && (
                            <div className="form-step">
                                <h2>Booking Details</h2>
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
                                {['Marriage Proposal', 'Romantic Date', 'Anniversary'].includes(formData.celebrationType) && (
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
                                <Typography variant="h3">Add ons</Typography>
                                <div className="add-on-selection">
                                    <Typography variant="h4">{otherAddOns[0].title}</Typography>
                                    <Grid container spacing={1} sx={{ justifyContent: "center",}}>
                                    {otherAddOns[0].addOns.map(item => (
                                        <Grid item xs={6}>
                                            <Card sx={{ backgroundColor: formData['extraDecoration'].includes(item) ? 'rgb(25, 118, 210)' : 'white' }} key={item.title} onClick={() => handleAddOnChange('extraDecoration', item)}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={item.image}
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
                                    <Grid container spacing={1} sx={{ justifyContent: "center",}}>
                                    {otherAddOns[1].addOns.map(item => (
                                        <Grid item xs={6}>
                                            <Card sx={{ backgroundColor: formData['chooseGifts'].includes(item) ? 'rgb(25, 118, 210)' : 'white' }} key={item.title} onClick={() => handleAddOnChange('chooseGifts', item)}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={item.image}
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
                                    <Grid container spacing={1} sx={{ justifyContent: "center",}}>
                                    {otherAddOns[2].addOns.map(item => (
                                        <Grid item xs={6}>
                                            <Card sx={{ backgroundColor: formData['specialServices'].includes(item) ? 'rgb(25, 118, 210)' : 'white' }} key={item.title} onClick={() => handleAddOnChange('specialServices', item)}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={item.image}
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

                        {currentStep === 5 && (
                            <div className="form-step">
                                <h2>Book</h2>
                                <Box sx={{ margin: 'auto', padding: 2, paddingLeft: '0px'}}>
                                    <Typography variant="h6" gutterBottom>
                                        Summary
                                    </Typography>
                                    <List className="summary-list" sx={{width: '100vw'}}>
                                        <ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Package'} />
                                            <Typography variant="body2">{(formData.choosePro?'Pro ':'')+ formData.theater + ' ' + formData.celebrationType.toUpperCase()}</Typography>
                                        </ListItem>
                                        <ListItem sx = {{ paddingLeft: '0px' }}> 
                                            <ListItemText primary={'Date & Duration'} />
                                            <Typography variant="body2">{formData.date.toISOString().split('T')[0] + ' ' + formData.slot.duration}</Typography>
                                        </ListItem>
                                        <ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Number of Guests'} />
                                            <Typography variant="body2">{formData.numberOfPeople}</Typography>
                                        </ListItem>
                                        <ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Email'} />
                                            <Typography variant="body2">{formData.email}</Typography>
                                        </ListItem>
                                        <ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Phone Number'} />
                                            <Typography variant="body2">{formData.whatsappNumber}</Typography>
                                        </ListItem>
                                        <ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Celebration Name'} />
                                            <Typography variant="body2">{formData.celebrationPersonName}</Typography>
                                        </ListItem>
                                        <ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Package Cost'} />
                                            <Typography variant="body1">{1500+(formData.choosePro?1000:0)}</Typography>
                                        </ListItem>
                                        { formData.numberOfPeople > 4 &&<ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Extra People Cost'} />
                                            <Typography variant="body1">{250*(formData.numberOfPeople - 5)}</Typography>
                                        </ListItem>}
                                        { formData['extraDecoration'].length > 0 && <ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Extra Decoration Cost'} secondary={formData['extraDecoration'].reduce((sum, { title }) => sum + title +',', '').slice(0, -1)} />
                                            <Typography variant="body1">{formData['extraDecoration'].reduce((sum, { price }) => sum + price, 0)}</Typography>
                                        </ListItem>}
                                        { formData['chooseGifts'].length > 0 &&<ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Gifts Cost'} secondary={formData['chooseGifts'].reduce((sum, { title }) => sum + title +',', '').slice(0, -1)}/>
                                            <Typography variant="body1">{formData['chooseGifts'].reduce((sum, { price }) => sum + price, 0)}</Typography>
                                        </ListItem>}
                                        { formData['specialServices'].length > 0 &&<ListItem sx = {{ paddingLeft: '0px' }}>
                                            <ListItemText primary={'Special Services Cost'} secondary={formData['specialServices'].reduce((sum, { title }) => sum + title +',', '').slice(0, -1)}/>
                                            <Typography variant="body1">{formData['specialServices'].reduce((sum, { price }) => sum + price, 0)}</Typography>
                                        </ListItem>}
                                    </List>
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

                        {currentStep === 6 && (
                            <div className="form-step">
                                <h2>Booking processed and blocked!</h2>
                                <Box sx={{ margin: 'auto', padding: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Your booking for {(formData.choosePro?'Pro ':'')+ formData.theater + ' ' + formData.celebrationType.toUpperCase()} of {formData.numberOfPeople} people at {formData.date.toISOString().split('T')[0] + ' ' + formData.slot.duration} is pending payment with bookingId {bookingId} . Our team will reach out to you on whatsapp to complete the payment for your booking. Your slot will be blocked for the next 1 hour to complete the payment.
                                    </Typography>
                                </Box>               
                            </div>
                        )}
                    </div>
                    <div className="bottom-info">
                        {totalCost > 0 && currentStep < 6 && (
                            <div className="total-cost">
                                <Typography variant="h6">Total Cost: ₹{totalCost}</Typography>
                            </div>
                        )}

                        <div className="form-navigation">
                            {(currentStep > 1 && currentStep < 6) && (
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
                                <Button disabled={!formData.agreeTerms || loading} variant="contained" onClick={() => doBooking()}>
                                    BOOK NOW
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
