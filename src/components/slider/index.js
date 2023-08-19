import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@mui/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import {
    BannerContent,
    BannerDescription,
    BannerShopButton,
    BannerTitle,
  } from "../../styles/banner";

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
    textBox: {
        position: 'absolute',
        top: '25em', // Adjust as needed
        left: '60%', // Adjust as needed
        transform: 'translate(0, -50%)', // Center the box
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Example background color
        color: 'white', // Example text color
        padding: '10px',
        borderRadius: '5px',
    },
}));

const images = [
    '/images/products/movie-2270554_1920.png',
    '/images/products/pink-wine-1964457_1920.jpg',
    '/images/products/balloons-1786430_1920.jpg'
];

const Slider = () => {


    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    const onClickHandler =  () => {
        window.open('https://wa.me/917483419406', '_blank');
      };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

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
                    <div key={index} style={{ position: 'relative' }}>
                        <img src={image} alt={`Image ${index}`} className={classes.image} />
                        <div className={classes.textBox}>
                            <BannerContent>
                                <Typography variant="h6">Private Theater</Typography>
                                <BannerTitle variant="h2">
                                    Premium Theater
                                </BannerTitle>

                                <BannerDescription variant="subtitle">
                                    Step into an opulent cinematic realm where every frame is a masterpiece, and experience movies in a symphony of luxury and style adorned with exquisite decorations
                                </BannerDescription>

                                <BannerShopButton color="primary" onClick={onClickHandler}>Book Now</BannerShopButton>
                            </BannerContent>
                        </div>
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
