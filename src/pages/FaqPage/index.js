import React from 'react';
import FaqAccordion from '../../components/FaqAccordion';
import Appbar from "../../components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { Container, Divider, Stack } from "@mui/material";
import Footer from '../../components/footer/'
import AppDrawer from '../../components/drawer';

const FaqPage = () => {
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
                        <div>
                            <FaqAccordion />
                        </div>
                        <Footer />
                        <AppDrawer />
                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
};

export default FaqPage;
