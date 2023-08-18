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
    marginBottom: '10rem',
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in diam nec erat tristique faucibus. Suspendisse eu turpis eu metus mattis laoreet vel quis massa. Morbi condimentum aliquam sapien eu dictum. Sed vehicula tincidunt felis, quis aliquam purus congue a.
      </Typography>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Our Mission
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.section}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in diam nec erat tristique faucibus. Suspendisse eu turpis eu metus mattis laoreet vel quis massa. Morbi condimentum aliquam sapien eu dictum. Sed vehicula tincidunt felis, quis aliquam purus congue a.
      </Typography>
    </Container>
  );
};

export default AboutUsSection;
