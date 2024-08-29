import React from "react";
import { Grid, Card, CardContent, Typography, Box, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import NavigationHeader from "../headerV2";
import Footer from "../footerV2";

const pricingData = [
    {
        title: "Feature",
        price: "₹15001",
        highlights:[
          "Best for celebrations",
          "Affordable",
        ],
        features: [
          "Candlelit Dinner",
          "Blind Fold",
          "Floral Decor",
          "Rose Petal Decoration",
          "Card Games",
          "Arch Decoration",
          "Prop stands",
          "Cake stand ",
          "Neon Message",
          "LED Marquee Letters",
          "Pro New",
          "Balloon bouquet",
          "Chocolate bouquet",
          "Surprise News Paper",
          "Chocolate Book",
          "Choco pic bouquet",
          "Bubble Bouquet",
          "Cake Box",
          "Big romantic Bouquet ",
          "Photo Balloon Bouquet",
          "Cake ",
          "Fog",
          "Complimentary F&B ",
          "DSLR Photography",
        ],
        availability: [true, true,true, true, true, true, true, true, true, true, false, false,false, false,false, false,false, false,false, false,false, false,false, false],
        bgColor: "rgb(255, 241, 214)", // Yellow,
        color: 'black'
      },
    {
      title: "Basic",
      price: "₹1500",
      highlights:[
        "Best for celebrations",
        "Affordable",
        "No Extra Costs"
      ],
      features: [
        "Candlelit Dinner",
        "Blind Fold",
        "Floral Decor",
        "Rose Petal Decoration",
        "Card Games",
        "Arch Decoration",
        "Prop stands",
        "Cake stand ",
        "Neon Message",
        "LED Marquee Letters",
        "Pro New",
        "Balloon bouquet",
        "Chocolate bouquet",
        "Surprise News Paper",
        "Chocolate Book",
        "Choco pic bouquet",
        "Bubble Bouquet",
        "Cake Box",
        "Big romantic Bouquet ",
        "Photo Balloon Bouquet",
        "Cake ",
        "Fog",
        "Complimentary F&B ",
        "DSLR Photography",
      ],
      availability: [true, true,true, true, true, true, true, true, true, true, false, false,false, false,false, false,false, false,false, false,false, false,false, false],
      bgColor: "rgb(255, 241, 214)", // Yellow
      color: 'black',
      buttonColor: 'rgb(250, 181, 52)'
    },
    {
      title: "Pro",
      price: "₹2500",
      highlights: [
        "Value for money",
        "Complimentary F&B s",
        "Complete Package"
      ],
      features: [
        "Candlelit Dinner",
        "Blind Fold",
        "Floral Decor",
        "Rose Petal Decoration",
        "Card Games",
        "Arch Decoration",
        "Prop stands",
        "Cake stand ",
        "Neon Message",
        "Marquee LED Letters",
        "Pro New",
        "Balloon bouquet",
        "Chocolate bouquet",
        "Surprise News Paper",
        "Chocolate Book",
        "Choco pic bouquet",
        "Bubble Bouquet",
        "Cake Box",
        "Big romantic Bouquet",
        "Photo balloon Bouquet",
        "Cake ",
        "Fog",
        "Complimentary F&B",
        "DSLR Photography",
      ],
      availability: [true, true, true, true,true, true, true, true,true, true, true, true,true, true, true, true,true, true, true, true],
      bgColor: "rgb(0, 76, 61)", // Green
      color: 'white',
      buttonColor: 'rgb(5, 166, 139)'
    },
    {
      title: "Unlimited",
      price: "₹3500",
      highlights: [
        "At home decorations",
        "Customized Decorations",
        "Theme Decoration"
      ],
      features: [
        "Candlelit Dinner",
        "Blind Fold",
        "Floral Decor",
        "Rose Petal Decoration",
        "Card Games",
        "Arch Decoration",
        "Prop stands",
        "Cake stand ",
        "Neon Message",
        "LED Marquee Letters",
        "Pro New",
        "Balloon bouquet",
        "Chocolate bouquet",
        "Surprise News Paper",
        "Chocolate Book",
        "Choco pic bouquet",
        "Bubble Bouquet",
        "Cake Box",
        "Big romantic Bouquet ",
        "Photo Balloon Bouquet",
        "Cake ",
        "Fog",
        "Complimentary F&B ",
        "DSLR Photography",
      ],
      availability: [true, true, true, true,true, true, true, true,true, true, true, true,true, true, true, true,true, true, true, true],
      bgColor: "rgb(223, 245, 255", // Blue
      color: 'black',
      buttonColor: 'rgb(0, 150, 222)'
    },
  ];

const PricingCard = ({ plan }) => {
    console.log(plan);
    return (
      <Card style={{ backgroundColor: plan.bgColor, margin: "10px", color: plan.color }}>
        <CardContent>
          <Typography variant="h1" component="h2" gutterBottom>
            {plan.title}
          </Typography>
          <Typography variant="h6" component="h3">
            {plan.price}
          </Typography>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {plan.highlights.map((feature, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                {plan.availability[index] ? (
                  <CheckCircleIcon style={{ marginRight: "8px", color: "#004C3D" }} />
                ) : (
                  <CancelIcon style={{ marginRight: "8px", color: "#004C3D" }} />
                )}
                <Typography variant="body1" >{feature}</Typography>
              </li>
            ))}
          </ul>
          <Button variant="contained" style={{ backgroundColor: plan.butt, color: plan.color }}>
            Choose {plan.title}
          </Button>
        </CardContent>
      </Card>
    );
  };

const FeatureComparisonColumn = ({ plan, header }) => {
    console.log(header);
  return (
    <Card style={{ margin: "10px", padding: "10px" }}>
      <CardContent>
        <Typography variant="h6" component="h4" gutterBottom align="center">
          {plan.title}
        </Typography>
        <Grid container spacing={2}>
          {plan.features.map((feature, index) => (
            <Grid item xs={12} key={index} align="center" sx ={{ borderBottom: "1px solid #0415270D"}}>
              {header && <Typography variant="body1" style={{ color: 'black', lineHeight: "33.5px" }} >
                {feature}
              </Typography>}
              {!header && (plan.availability[index] ? 
                <CheckCircleIcon style={{ color: 'green', fontSize: "30px" }} />:
                <CancelIcon style={{ color: 'red', fontSize: "30px" }} />
              )}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const FeaturesComparisonColumns = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {pricingData.map((plan, index) => (
        <Grid item xs={12} md={3} key={index}>
          <FeatureComparisonColumn plan={plan} header={index === 0}/>
        </Grid>
      ))}
    </Grid>
  );
};

const PricingPage = () => {
  return (
    <div>
    <NavigationHeader />
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Choose the Plan That's Right for You
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {pricingData.map((plan, index) => (
          index > 0 && <Grid item xs={12} md={4} key={index}>
            <PricingCard plan={plan} />
          </Grid>
        ))}
      </Grid>
      <FeaturesComparisonColumns />
    </Box>
    <Footer />
    </div>
  );
};

export default PricingPage;
