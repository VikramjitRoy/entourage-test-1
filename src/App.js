import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUsPage from './components/aboutuspage';
import HomePage from './components/homepage';
import ContactUsPage from './pages/ContactUsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import FaqPage from './pages/FaqPage';
import ServicesPage from './pages/ServicesPage';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    document.title = "Flickstones - Home";
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/tnc" component={TermsAndConditionsPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
