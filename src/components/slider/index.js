import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@mui/styles';
import { Stepper, Step } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    slider: {
        width: '100%',
        height: 'calc(100vh - 48px)', // Adjust height to accommodate the stepper
        position: 'relative',
        overflow: 'hidden', // Hide overflow to prevent stepper from overlapping images
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    dotStepper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
}));

const DotStepper = ({ activeStep, stepCount }) => {
    const classes = useStyles();

    return (
        <div className={classes.dotStepper}>
            <Stepper alternativeLabel activeStep={activeStep}>
                {Array.from({ length: stepCount }).map((_, index) => (
                    <Step key={index} />
                ))}
            </Stepper>
        </div>
    );
};

const images = [
    'https://via.placeholder.com/1200x400?text=Image%201',
    'https://via.placeholder.com/1200x400?text=Image%202',
    'https://via.placeholder.com/1200x400?text=Image%203',
    'https://via.placeholder.com/1200x400?text=Image%204',
    'https://via.placeholder.com/1200x400?text=Image%205',
];

const Slider = () => {


    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

    return (
        <div className={classes.slider}>
            <SwipeableViews
                index={activeIndex}
                onChangeIndex={handleSlideChange}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index}`} className={classes.image} />
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeIndex}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeIndex === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeIndex === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </div>
    );
};

export default Slider;
