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
  Divider,
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

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

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

const onClickHandler =  (name) => {
  window.open('https://wa.me/917483419406?text='+name, '_blank');
}

const onClickHandlerInstagram =  (name) => {
  window.open('https://www.instagram.com/flickstones/', '_blank');
}

export default function ProductDetail({ open, onClose, product }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

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
          background: Colors.secondary,
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
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              What will you get
            </Typography>
            <Typography variant="body">
              {detailedDescription}
            </Typography>
            
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* <div display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex-direction="column">
              <Typography variant="h6">
              Booking for people
            </Typography>
              <IncDec />
              </div> */}
              {/* <Button  variant="contained">Book Now</Button> */}
              <BannerShopButton sx={{ padding: '10px 10px' }} color="primary" onClick={() => onClickHandler(product.name)}>Book Now</BannerShopButton>
            </Box>
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
              }}
            >
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} onClick={onClickHandlerInstagram}/>
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
