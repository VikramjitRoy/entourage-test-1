import React from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.primary.main, // Use primary background color
    color: theme.palette.secondary.main, // Use secondary text color
  },
  heading: {
    marginBottom: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
  section: {
    marginBottom: theme.spacing(10),
  }
}));

const AboutUsSection = ({ title, content }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.section}>
      Flickstones is a newly opened theater in HSR Layout Bengaluru. It can be booked to experience your favorite content on a 150-inch screen with dolby vision and dolby atmos support in 4K to provide a true theater like experience. Recliner seats lets you enjoy your content with outmost comfort.You can surprise your loved ones with decorations to celebrate special occasions.  
     </Typography>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Our Mission
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.section}>
      We pride ourselves on offering state-of-the-art technology to ensure an immersive and captivating movie experience. Our theater is equipped with Dolby Vision and Dolby Surround sound, delivering stunning 4K visuals and an audio environment that envelopes you in every scene. The result is a truly breathtaking cinematic encounter that will leave you spellbound.
      </Typography>
    </Container>
  );
};

export default AboutUsSection;
