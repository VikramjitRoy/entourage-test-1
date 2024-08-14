import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
  Stack,
  Divider, Rating, Accordion, AccordionSummary, AccordionDetails, Grid
} from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import IncDec from "../ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@mui/styles';

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  customAccordion: {
    backgroundColor: 'black',
    color: theme.palette.primary.contrastText,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}))

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  // padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5
}));

const onClickHandler = (name) => {
  window.open('https://wa.me/917483419406?text=' + name, '_blank');
}

const onClickHandlerInstagram = (name) => {
  window.open('https://www.instagram.com/flickstones/', '_blank');
}

const iconStyle = {
  fontSize: '4rem', // Adjust the size as needed
  cursor: 'pointer'
};

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const accordionStyles = {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  };

  const detailedDescription = product.descriptionDetailed.map((line) => (<div><Typography variant="h6">{line}</Typography><Divider /> </div>));
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: 'linear-gradient(to bottom right, #b76e79 30%, #c49089 70%)',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          fontWeight="bold"
        >
          {product.name}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{
        backgroundColor: '#343131',
        color: '#c49089',
      }}>

        <ProductDetailWrapper display={"flex"} bgcolor={"#343131"} flexDirection={matches ? "column" : "row"}>
          <Grid container spacing={2}>
            <Grid item md={8} sm={12}>
              <Product sx={{ mr: 4, mt: 2 }}>
                <ProductImage src={product.image} />
              </Product>
            </Grid>
            <Grid item md={4} sm={12}>
              <ProductDetailInfoWrapper>
                <Typography variant="h4" gutterBottom>
                  {product.name}
                </Typography>

                {/* Short Description */}
                <Typography variant="subtitle1" paragraph>
                  {product.purpose}
                </Typography>

                {/* Rating and Reviews */}
                <Box display="flex" alignItems="center">
                  <Rating name="product-rating" value={5} readOnly />
                  <Typography variant="body2" color="secondary">
                    ({product.review} Reviews)
                  </Typography>
                </Box>

                <BannerShopButton sx={{ padding: '10px 10px', marginTop: '20px' }} color="primary" onClick={() => onClickHandler(product.name)}>Book Now</BannerShopButton>

                {/* Line Separator */}
                <Divider style={{ margin: '20px 0' }} />

                {/* Collapsible Sections */}
                <Accordion style={accordionStyles}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="description-panel" id="description-header">
                    <Typography variant="h6">Description</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">
                      {product.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion style={accordionStyles} defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="decoration-panel" id="decoration-header">
                    <Typography variant="h6">Decoration Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1"><ol>
                      {product.descriptionDetailed.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ol></Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion style={accordionStyles}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="food-panel" id="food-header">
                    <Typography variant="h6">Food and Beverages</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">Food and beverages can be ordered from swiggy and zomato. Lots of popular restaurants around us. Cutlery and tableware is available.</Typography>
                  </AccordionDetails>
                </Accordion>              {/* <div display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex-direction="column">
              <Typography variant="h6">
              Booking for people
            </Typography>
              <IncDec />
              </div> */}
                {/* <Button  variant="contained">Book Now</Button> */}

                <Box
                  sx={{
                    mt: 4,
                    color: Colors.dove_gray,
                  }}
                >
                  <InstagramIcon style={iconStyle} sx={{ cursor: 'pointer' }} onClick={onClickHandlerInstagram} />
                </Box>
              </ProductDetailInfoWrapper>
            </Grid>
          </Grid>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
