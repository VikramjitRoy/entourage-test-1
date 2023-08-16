
import "./homepage.css";
import { Container, Typography, Box, Stack, Grid, Button, Divider, CssBaseline  } from "@mui/material";
import Appbar from "../appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import Products from "../products";
import { UIProvider } from "../../context/ui";
import Footer from "../footer";
import AppDrawer from "../drawer";
import Promotions from "../promotions";
import SearchBox from "../search";
import { useEffect } from "react";
import { ColorLensRounded } from "@mui/icons-material";
import { Colors } from "../../styles/theme";
import { Element } from 'react-scroll';
import ImageSlider from "../slider";

function HomePage() {
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

export default HomePage;
