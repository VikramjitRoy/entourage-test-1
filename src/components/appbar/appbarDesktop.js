import {
  AppBar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import logo from "./flickstones_logo_cropped.png"
import NavigationBar from "../navbar";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Products from "../products";
import { Link as ScrollLink, Element } from 'react-scroll';

export default function AppbarDesktop({ matches }) {

  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>

      <AppbarHeader variant="h4"><img src={logo} width="85px" height="100%" align="center" /></AppbarHeader>
      <MyList type="row">
        <ListItemButton color="inherit" component={Link} to="/">
          Home
        </ListItemButton>
        <ListItemButton color="inherit" component={Link} to="/services">
          Services
        </ListItemButton>
        <ListItemButton color="inherit" component={Link} to="/about-us">
          About us
        </ListItemButton>
        <ListItemButton color="inherit" component={Link} to="/contact-us">
          Contact us
        </ListItemButton>
      </MyList>


      {/* <Actions matches={matches} />    */}
    </AppbarContainer>
  );
}
