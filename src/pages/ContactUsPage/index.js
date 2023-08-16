import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import ContactCard from '../../components/ContactCard';
import Appbar from "../../components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { Container, Divider, Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '5rem',
        paddingBottom: '5rem',
    },
    section: {
        marginBottom: '5rem',
    },
}));

const ContactUsPage = () => {
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
                        <Divider />
                        <Container className={classes.root} sx = {{align: "center"}}>
                            {/* <Typography variant="h4" gutterBottom className={classes.section} sx = {{align: "center"}}>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" className={classes.section}>
                                Feel free to contact us for any inquiries or feedback.
                            </Typography> */}
                            <ContactCard />
                        </Container>
                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
};

export default ContactUsPage;
