import styled from "@emotion/styled";
import {
  Grid,
  List,
  ListItemText,
  ListItemButton,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import { BoltRounded } from "@mui/icons-material";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Footer() {
  const onClickHandlerInstagram = (name) => {
    window.open('https://www.instagram.com/flickstones/', '_blank');
  }

  const iconStyle = {
    fontSize: '4rem', // Adjust the size as needed
};

  return (
    <Box
      sx={{
        background: Colors.secondary,
        color: Colors.primary,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
        fontWeight: "bold",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2" >
            Flickstones is a premium private theater in HSR Layout, Bengaluru. We help you immerse in a complete cinematic experience along with providing mesmerizing decorations for your special moments.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            {/* <FacebookIcon sx={{ mr: 1, cursor: 'pointer', }} />
            <TwitterIcon sx={{ mr: 1, cursor: 'pointer',  }} /> */}
            <InstagramIcon style={iconStyle} sx={{ cursor: 'pointer',  }} onClick={onClickHandlerInstagram} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemButton color="inherit" component={Link} to="/about-us">
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemButton>
            <ListItemButton color="inherit" component={Link} to="/faq">
              <Typography lineHeight={2} variant="caption2">
                FAQ
              </Typography>
            </ListItemButton>
            <ListItemButton color="inherit" component={Link} to="/tnc">
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
