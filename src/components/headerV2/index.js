import { useState } from "react";
import {  Typography, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "./flickstones_logo_cropped.png"

const useStyles2 = {
    appBar: {
      backgroundColor: 'rgba(30, 21, 42, 1.0)',
      boxShadow: 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1300,
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      transition: 'background-color 0.3s ease',
    },
    appBarHovered: {
      backgroundColor: 'rgba(30, 21, 42, 0.3)',
    },
    logo: {
      flexGrow: 1,
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      textDecoration: 'none',
    },
    link: {
      fontSize: '18px',
      color: '#fff',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    menuIcon: {
      color: '#fff',
    },
    drawerPaper: {
      backgroundColor: 'rgba(0,0,0,0.85)',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerList: {
      width: '100%',
      textAlign: 'center',
    },
    drawerListItem: {
      fontSize: '24px',
      color: '#fff',
      textDecoration: 'none',
      // padding: '10px 0',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButton: {
      color: '#fff',
    },
  };
  
  function NavigationHeader() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const toggleDrawer = () => () => {
        setDrawerOpen(!drawerOpen);
      };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <>
        <AppBar
          position="static"
          style={{
            ...useStyles2.appBar,
            ...(isHovered ? useStyles2.appBarHovered : {}),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          touchStart={handleMouseEnter}
          touchEnd={handleMouseLeave}
        >
          <Toolbar>
            {/* <Typography component={Link} to="/pricing" variant="h6" style={useStyles2.link}>
              <a style={useStyles2.link}>Packages</a>
            </Typography> */}
            <Typography component={Link} to="/" variant="h6" style={useStyles2.logo}>
              F L I C K S T O N E S
            </Typography>
              <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer()}
              style={useStyles2.menuIcon}
            >
              {!drawerOpen?<MenuIcon />: <CloseIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={drawerOpen}
          PaperProps={{
            style: useStyles2.drawerPaper,
          }}
        >
          <List style={useStyles2.drawerList}>
            <ListItem component={Link} to="/" style={useStyles2.drawerListItem} onClick={toggleDrawer()}>
              <ListItemText primary="Home" />
            </ListItem>
            {/* <ListItem component="a" href="#about" style={useStyles2.drawerListItem}>
              <ListItemText primary="About Us" />
            </ListItem> */}
            {/* <ListItem  component={Link} to="/pricing" style={useStyles2.drawerListItem}>
              <ListItemText primary="Services" />
            </ListItem> */}
            {/* <ListItem component="a" href="#contact" style={useStyles2.drawerListItem}>
              <ListItemText primary="Contact" />
            </ListItem> */}
          </List>
        </Drawer>
      </>
    );
  }

  export default NavigationHeader;