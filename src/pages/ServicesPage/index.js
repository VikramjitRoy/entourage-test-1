import React from 'react';

import Appbar from "../../components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { Container, Divider, Stack } from "@mui/material";
import Footer from '../../components/footer/'
import Products from '../../components/products';

const ServicesPage = () => {
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
                            <Products />
                        </div>
                        <Footer />
                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
};

export default ServicesPage;