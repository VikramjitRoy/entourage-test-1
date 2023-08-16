import React from 'react';
import { makeStyles } from '@mui/styles';
import AboutUsSection from '../aboutussection';
import { Container, Stack } from "@mui/material";
import Appbar from "../appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui";
import { Colors } from "../../styles/theme";


const useStyles = makeStyles((theme) => ({
  root: {},
}));

const AboutUsPage = () => {
  const classes = useStyles();

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
            <div className={classes.root}>
              <AboutUsSection
                title="About Us"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in diam nec erat tristique faucibus. Suspendisse eu turpis eu metus mattis laoreet vel quis massa. Morbi condimentum aliquam sapien eu dictum. Sed vehicula tincidunt felis, quis aliquam purus congue a."
              />
              <AboutUsSection
                title="Our Mission"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in diam nec erat tristique faucibus. Suspendisse eu turpis eu metus mattis laoreet vel quis massa. Morbi condimentum aliquam sapien eu dictum. Sed vehicula tincidunt felis, quis aliquam purus congue a."
              />
              {/* Add more sections as needed */}
            </div>
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default AboutUsPage;
