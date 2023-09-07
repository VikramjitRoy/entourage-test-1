import React from 'react';
import { makeStyles } from '@mui/styles';
import AboutUsSection from '../aboutussection';
import { Container, Divider, Stack } from "@mui/material";
import Appbar from "../appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui";
import { Colors } from "../../styles/theme";
import Footer from '../footer';
import AppDrawer from '../drawer';


const useStyles = makeStyles((theme) => ({
  root: {},
}));

const AboutUsPage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="false"
        sx={{
          background: "#343131",
        }}
      >
        <Stack>
          <UIProvider bgcolor={Colors.primary}>
            <Appbar />
            <Divider />
            <AboutUsSection />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default AboutUsPage;
