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
    cursor: 'pointer',
    fontSize: '4rem', 
 // Adjust the size as needed
};

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #b76e79 30%, #c49089 70%)',
        color: Colors.primary,
        p: { xs: 2, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
        fontWeight: "bold",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={8} lg={6}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              Flickstones is a premium private theater in HSR Layout, Bengaluru. We help you immerse in a complete cinematic experience along with providing mesmerizing decorations for your special moments.
              </Typography>
            </ListItemText>
          </List>
          <Box
            sx={{
              mt: 4
            }}
          >
            {/* <FacebookIcon sx={{ mr: 1, cursor: 'pointer', }} />
            <TwitterIcon sx={{ mr: 1, cursor: 'pointer',  }} /> */}
            <InstagramIcon style={iconStyle} onClick={onClickHandlerInstagram} />
          </Box>
        </Grid>
        <Grid item md={8} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemButton padding="0px 0px" color="inherit" component={Link} to="/about-us">
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemButton>
            <ListItemButton padding="0px 0px" color="inherit" component={Link} to="/faq">
              <Typography lineHeight={2} variant="caption2">
                FAQ
              </Typography>
            </ListItemButton>
            <ListItemButton paddingLeft="0px" paddingRight="0px" color="inherit" component={Link} to="/tnc">
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
