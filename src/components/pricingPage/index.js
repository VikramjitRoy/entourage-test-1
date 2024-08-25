import React from "react";
import { Grid, Card, CardContent, Typography, Box, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const pricingData = [
    {
      title: "Basic",
      price: "₹1500",
      highlights:[
        "Best for celebrations",
        "Affordable",
      ],
      features: [
        "Romantic:",
        "Candle Light Dinner Setup",
        "Make changes in menu to have combos for couple/Friends/family	",
        "Blind Fold",
        "White/Red Floral Decor",
        "Rose Petal Decoration",
        "Card or board games for couple",
        "Celebrations:",
        "Balloon/Floral Arch Decoration",
        "Balloons/Flower on the floor",
        "Prop stands",
        "Cake stand ",
        "Neon Message",
        "LED Marquee Name Letters",
        "Pro New",
        "Balloon bouquet",
        "Chocolate bouquet LInk2",
        "Surprise News Paper Link2",
        "Chocolate Book Link2",
        "Choco and pic bouquet Link",
        "Bubble Balloon Bouquet",
        "Cake Box",
        "Romantic Pro",
        "Big romantic Bouquet ",
        "Photo and Balloon Bouquet",
        "Pro:",
        "Cake ",
        "Fog",
        "Food Combos (Any 2 beverages and 1 Snack)",
        "DSLR 15min unlimited photo",
      ],
      availability: [true, true, false, false],
      bgColor: "rgb(255, 241, 214)", // Yellow
      color: 'black'
    },
    {
      title: "Pro",
      price: "₹2500",
      highlights: [
        "Value for money",
        "Complimentary Food & Beverages",
        "Complete Package"
      ],
      features: [
        "Romantic:",
        "Candle Light Dinner Setup",
        "Make changes in menu to have combos for couple/Friends/family	",
        "Blind Fold",
        "White/Red Floral Decor",
        "Rose Petal Decoration",
        "Card or board games for couple",
        "Celebrations:",
        "Balloon/Floral Arch Decoration",
        "Balloons/Flower on the floor",
        "Prop stands",
        "Cake stand ",
        "Neon Message",
        "LED Marquee Name Letters",
        "Pro New",
        "Balloon bouquet",
        "Chocolate bouquet LInk2",
        "Surprise News Paper Link2",
        "Chocolate Book Link2",
        "Choco and pic bouquet Link",
        "Bubble Balloon Bouquet",
        "Cake Box",
        "Romantic Pro",
        "Big romantic Bouquet ",
        "Photo and Balloon Bouquet",
        "Pro:",
        "Cake ",
        "Fog",
        "Food Combos (Any 2 beverages and 1 Snack)",
        "DSLR 15min unlimited photo",
      ],
      availability: [true, true, true, true],
      bgColor: "rgb(0, 76, 61)", // Green
      color: 'white',
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
        "Romantic:",
        "Candle Light Dinner Setup",
        "Make changes in menu to have combos for couple/Friends/family	",
        "Blind Fold",
        "White/Red Floral Decor",
        "Rose Petal Decoration",
        "Card or board games for couple",
        "Celebrations:",
        "Balloon/Floral Arch Decoration",
        "Balloons/Flower on the floor",
        "Prop stands",
        "Cake stand ",
        "Neon Message",
        "LED Marquee Name Letters",
        "Pro New",
        "Balloon bouquet",
        "Chocolate bouquet LInk2",
        "Surprise News Paper Link2",
        "Chocolate Book Link2",
        "Choco and pic bouquet Link",
        "Bubble Balloon Bouquet",
        "Cake Box",
        "Romantic Pro",
        "Big romantic Bouquet ",
        "Photo and Balloon Bouquet",
        "Pro:",
        "Cake ",
        "Fog",
        "Food Combos (Any 2 beverages and 1 Snack)",
        "DSLR 15min unlimited photo",
      ],
      availability: [true, true, true, true],
      bgColor: "rgb(223, 245, 255", // Blue
      color: 'black',
    },
  ];

const PricingCard = ({ plan }) => {
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
                  <CheckCircleIcon style={{ marginRight: "8px", color: "#fff" }} />
                ) : (
                  <CancelIcon style={{ marginRight: "8px", color: "#fff" }} />
                )}
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>
          <Button variant="contained" style={{ backgroundColor: "#fff", color: plan.color }}>
            Choose {plan.title}
          </Button>
        </CardContent>
      </Card>
    );
  };

const FeatureComparisonColumn = ({ plan }) => {
  return (
    <Card style={{ margin: "10px", padding: "10px" }}>
      <CardContent>
        <Typography variant="h6" component="h4" gutterBottom align="center">
          {plan.title}
        </Typography>
        <Grid container spacing={2}>
          {plan.features.map((feature, index) => (
            <Grid item xs={12} key={index} align="center">
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {feature}
              </Typography>
              {plan.availability[index] ? (
                <CheckCircleIcon style={{ color: plan.color, fontSize: "30px" }} />
              ) : (
                <CancelIcon style={{ color: "#ccc", fontSize: "30px" }} />
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
    <Grid container spacing={3} justifyContent="center">
      {pricingData.map((plan, index) => (
        <Grid item xs={12} md={4} key={index}>
          <FeatureComparisonColumn plan={plan} />
        </Grid>
      ))}
    </Grid>
  );
};

const PricingPage = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Choose the Plan That's Right for You
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {pricingData.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PricingCard plan={plan} />
          </Grid>
        ))}
      </Grid>
      <FeaturesComparisonColumns />
    </Box>
  );
};

export default PricingPage;
