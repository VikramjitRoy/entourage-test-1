import logo from "./logo.svg";
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button, Divider, CssBaseline  } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import { useEffect } from "react";
import { ColorLensRounded } from "@mui/icons-material";
import { Colors } from "./styles/theme";
import Routes from "./routes";
import { Element } from 'react-scroll';
import ImageSlider from "./components/slider";

function App() {
  useEffect(() => {
    document.title = "Flickstones - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#343131",
        }}
      >
        <Stack>
          <UIProvider bgcolor={Colors.primary}>
            <Appbar />
            <Divider />
      
              <ImageSlider />
 

            {/* <Banner /> */}
            <Promotions />
            {/* <SearchBox /> */}
            <Box display="flex" bgcolor={Colors.primary} justifyContent="center" sx={{ p: 4 }} >
              <Typography color={Colors.secondary} variant="h4">Our Services</Typography>
            </Box>
            <Element name="products">
              <Products />
            </Element>
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
