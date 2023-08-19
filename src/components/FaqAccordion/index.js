import React from 'react';
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.primary.main, // Use primary color for background
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    // Use secondary color for text color
  },
  section: {
    marginBottom: theme.spacing(2), // Add margin between accordion sections
    backgroundColor: theme.palette.secondary.main,
  },
}));

const FaqAccordion = () => {
  const classes = useStyles();
  const data = [
    {
        "summary": "Customers have to set up their own content source.",
        "description": "We do not provide access to any OTT accounts as the OTT accounts can not be used for commercial purposes. You need to have your own OTT account. We provide a laptop for you to easily log into your account and start watching."
    },
    {
        "summary": "Illegal/Prohibited contents are not allowed. We do not take any liability for such cases.",
        "description": "Customers must not stream any content which is illegal/prohibited as per Indian laws. We will not be liable for any consequences that arise out of violation of this condition and we will not allow such customers to book with us again."
    },
    {
        "summary": "Refund Policy",
        "description": "Full Refund of the Advance Amount will be given if the booking is cancelled at least 72 hours before the booking time."
    },
    {
        "summary": "In case of any technical interruption from our end, appropriate refund will be provided.",
        "description": "If there is any failure in working of the projector, laptop, internet access or sound system - we will reimburse the paid amount after deducting the rent for the period of time before interruption."
    },
    {
        "summary": "You are responsible for your belongings",
        "description": "We will not be responsible in case of loss of personal belongings of any nature. Customers must take care of their belongings."
    },
    {
        "summary": "The booking period includes set up and check out time",
        "description": "Customers must vacate the theater along with all their belongings on or before the end time."
    },
    {
        "summary": "Customers must not make any changes to the configuration of technical equipment.",
        "description": "Customers should not make adjustments or modifications to the set up of projector, screen, laptop and sound system. If any changes is required, we will do it from our end."
    },
    {
        "summary": "Minors are not allowed to book the theater",
        "description": "Individuals below 18 years of age cannot book the theater. Legal guardians can book the theater and bring their minor ward(s) along with them."
    },
    {
        "summary": "Customers will be liable to pay in case of any damage to the theater caused by them",
        "description": "If there is any damage to any of the technical or non technical item in the theater including the walls, lights, seating, etc. the customers will have to pay for it."
    },
    {
        "summary": "Cleaning fee up to Rs 500 will be charged in cases where significant cleaning would be required after check out",
        "description": "In cases where cleaners would be required to clean the garbage, left overs and other wastes after the customers check out, the customers will have to pay appropriate cleaning fee."
    },
    {
        "summary": "Restricted consumption",
        "description": "Customers are not allowed to smoke, consume alcoholic beverages or any illegal substance inside the theater. Appropriate action would be taken against such customers."
    },
    {
        "summary": "Pets are strictly not allowed inside the theatre",
        "description": "Pets are strictly not allowed inside the theatre"
    }
];

  const dataList = data.map((d, index) => (
    <Accordion key={index} className={classes.section}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
        <Typography variant="h6" className={classes.heading}>
          {d.summary}
        </Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography>{d.description}</Typography>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <div className={classes.root}>
      {dataList}
    </div>
  );
};

export default FaqAccordion;