
import "./homepage.css";
import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import Appbar from "../appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import Products from "../products";
import { UIProvider } from "../../context/ui";
import Footer from "../footer";
import AppDrawer from "../drawer";
import Promotions from "../promotions";
import { useEffect } from "react";
import { Colors } from "../../styles/theme";
import ImageSlider from "../slider";

function HomePage() {
    useEffect(() => {
        document.title = "Flickstones - Home";
    }, []);
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
                        
                        <ImageSlider />
                        {/* <Banner /> */}
                        <Promotions />
                        {/* <SearchBox /> */}
                        <Box display="flex" bgcolor={Colors.primary} justifyContent="center" sx={{ mt: 6, p: 2 }} >
                            <Typography color={Colors.secondary} variant="h4">Our Services</Typography>
                        </Box>
                        <Products />
                        <Footer />
                        <AppDrawer />
                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}

export default HomePage;
