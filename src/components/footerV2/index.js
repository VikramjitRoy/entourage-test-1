
import {  Typography, Box, Grid, Stepper, Step, StepLabel, Fab, Card, CardMedia, CardContent, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Container } from "@mui/material";
import { Link } from 'react-router-dom';

const useStyles3 = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '40px 0',
      zIndex: '99999',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      marginBottom: '8px',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    contactItem: {
      marginBottom: '8px',
    },
    copyright: {
      marginTop: '20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
      paddingTop: '10px',
      fontSize: '14px',
    },
  };
  
  function Footer() {
    return (
      <Box component="footer" style={useStyles3.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography style={useStyles3.logo}>F L I C K S T O N E S</Typography>
            </Grid>
            <Grid item xs={12} md={4} style={useStyles3.navLinks}>
              <Link component={Link} to="/" style={useStyles3.navLink}>Home</Link>
              {/* <Link href="#about" style={useStyles3.navLink}>About Us</Link> */}
              <Link component={Link} to="/pricing" style={useStyles3.navLink}>Services</Link>
              {/* <Link href="#contact" style={useStyles3.navLink}>Contact</Link> */}
            </Grid>
            <Grid item xs={12} md={4} style={useStyles3.contactInfo}>
              <Typography style={useStyles3.contactItem}>
                Address: <Link href="https://maps.app.goo.gl/b6g164XHyQiy3vMz6" target="_blank" rel="noopener" style={useStyles3.navLink}>3rd floor, NR Complex, Sector 2, HSR Layout, Bengaluru</Link>
              </Typography>
              <Typography style={useStyles3.contactItem}>
                Phone: <Link href="tel:+917483419406" style={useStyles3.navLink}>+91-7483419406</Link>
              </Typography>
              <Typography style={useStyles3.contactItem}>
                Email: <Link href="mailto:mail.flickstones@gmail.com" style={useStyles3.navLink}>mail.flickstones@gmail.com</Link>
              </Typography>
            </Grid>
          </Grid>
          <Box style={useStyles3.copyright}>
            <Typography>
              &copy; {new Date().getFullYear()} Flickstones LLP. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  export default Footer;