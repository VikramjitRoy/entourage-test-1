import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const useStyles = makeStyles((theme) => ({

  card: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: theme.spacing(5),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(1),
    backgroundColor: "#c49089", // Use secondary background color

  },
  media: {
    height: 200,
  },
  content: {
    display: 'grid',
    gap: theme.spacing(1),
    color: "#343131", // Use primary text color
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const ContactCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} sx = {{backgroundColor: "#c49089"}}>
      <CardMedia
        className={classes.media}
        image=""
        title="Google Maps"
      />
      <CardContent className={classes.content}>
        <Typography variant="h6" gutterBottom>
          <LocationOnIcon className={classes.icon} />
          Address
        </Typography>
        <Typography variant="body2">
          Your address here
        </Typography>
        <Typography variant="h6">
          <PhoneIcon className={classes.icon} />
          Phone Number
        </Typography>
        <Typography variant="body2">
          Your phone number here
        </Typography>
        <Typography variant="h6">
          <LanguageIcon className={classes.icon} />
          Website
        </Typography>
        <Typography variant="body2">
          Your website URL here
        </Typography>
        <Typography variant="h6">
          <AccessTimeIcon className={classes.icon} />
          Operational Hours
        </Typography>
        <Typography variant="body2">
          Your operational hours here
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
