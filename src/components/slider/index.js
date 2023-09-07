import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Stream Your Favorite content',
    imgPath:
      '/images/banner/theater_diamond_banner.jpg'
  },{
    label: 'Lounge in comfort',
    imgPath:
      '/images/banner/pool_banner.jpg',
  },
  {
    label: 'Surprise your loved ones',
    imgPath:
      '/images/banner/balloons-1786430_1920.jpg'
  }
];

function ImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep == 0 ? maxSteps - 1 : (prevActiveStep - 1) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const onClickHandler =  () => {
    window.open('https://wa.me/917483419406', '_blank');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= images.length-1 ? (
              <Box
                component="div"
                sx={{
                  width: '100%',
                  position: 'relative',
                  paddingBottom: '75%', // Adjust this for aspect ratio (e.g., 16:9)
                  overflow: 'hidden',
                  backgroundColor: 'black', // Fallback background color
                }}
              >
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                 <div
                  className="text-overlay"
                  style={{
                    position: 'absolute',
                    bottom: !matches?'25%':'0',
                    right: !matches?'10%':'0',
                    width: !matches?'30%':'100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    textSizeAdjust: 'auto',
                    color: 'white',
                    padding: !matches?'10px':'0px',
                    borderRadius: !matches?10:0
                  }}
                >
                 <BannerContent>
                 {!matches && <Typography variant="h6">Private Theater</Typography>}
                 {!matches &&<BannerTitle variant="h2">
                      Premium Theater
                    </BannerTitle>}

                    <BannerDescription variant="subtitle">
                      {!matches? 'Step into an opulent cinematic realm where every frame is a masterpiece, and experience movies in a symphony of luxury and style adorned with exquisite decorations'
                      : step.label}
                    </BannerDescription>

                    {!matches &&<BannerShopButton color="primary" onClick={onClickHandler}>Book Now</BannerShopButton>}
                  </BannerContent>
                </div>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        sx={{
          background: "#343131",
          "& .MuiMobileStepper-dot": {
            backgroundColor: theme.palette.secondary.main
          },
          "& .MuiMobileStepper-dotActive ~ .MuiMobileStepper-dot": {
            backgroundColor: theme.palette.action.disabled
          }
        }}
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "#c49089" }}
            size="small"
            onClick={handleNext}
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
          <Button sx={{ color: "#c49089" }} size="small" onClick={handleBack} >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ImageSlider;