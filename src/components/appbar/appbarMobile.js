import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";
import logo from "./flickstones_logo_1.png";
import { Link } from 'react-router-dom';

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader marginRight="50px" align="center" component={Link} to="/">
        <img src={logo} width="100px" height="100" align="center" />
      </AppbarHeader>
      {/* <Actions matches={matches} /> */}
    </AppbarContainer>
  );
}
