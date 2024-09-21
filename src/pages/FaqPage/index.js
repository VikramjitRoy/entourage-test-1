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
import NavigationHeader from '../../components/headerV2';
import FooterV2 from '../../components/footerV2';

const FaqPage = () => {
    return (
        <div>
            <NavigationHeader />
            <FaqAccordion />
            <FooterV2 />
        </div>             
    );
};

export default FaqPage;
