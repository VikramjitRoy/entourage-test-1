import { AppBar, Tabs, Tab } from '@mui/material';
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { useUIContext } from "../../context/ui";
import logo from "./flickstones_logo_cropped.png"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function AppbarDesktop({ matches }) {

  const { setShowSearchBox } = useUIContext();

  const tabStyles = {
    minWidth: 'auto',
    width: '100vw',
    marginLeft: '20px',
    marginRight: '20px',
    '&.Mui-selected': {
      color: "#c49089",
    },
    '&.Mui-selected.MuiTab-textColorPrimary': {
      color: "#c49089",
    },
    '&.MuiTab-textColorPrimary': {
      color: "#c49089",
      '&:hover': {
        color: "#fff",
        backgroundColor: 'rgba(196, 144, 137, 0.3)', // Rose gold background on hover
      },
    },
    '&.MuiTab-textColorInherit': {
      '&:hover': {
        backgroundColor: "#fff", // Rose gold background on hover for selected tab
      },
    },
  };

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4" component={Link} to="/"><img src={logo} width="85px" height="100%" align="center" /></AppbarHeader>
      <Tabs
        variant="fullWidth"
        value={window.location.pathname}
        textColor="primary"
        indicatorColor='secondary'
        sx={tabStyles}
      >
        <Tab
          label="Home"
          value="/"
          component={Link}
          to="/"
          sx={tabStyles}
        />
        <Tab
          label="Services"
          value="/services"
          component={Link}
          to="/services"
          sx={tabStyles}
        />
        <Tab
          label="About Us"
          value="/about-us"
          component={Link}
          to="/about-us"
          sx={tabStyles}
        />
        <Tab
          label="Contact Us"
          value="/contact-us"
          component={Link}
          to="/contact-us"
          sx={tabStyles}
        />
      </Tabs>


      {/* <Actions matches={matches} />    */}
    </AppbarContainer>
  );
}
