import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUsPage from './components/aboutuspage';

import HomePage from './components/homepageV2';
import   MultiStepForm from './components/formV3';
import ContactUsPage from './pages/ContactUsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import FaqPage from './pages/FaqPage';
import TermsAndConditions from './components/faqV2'
import ServicesPage from './pages/ServicesPage';
import { useEffect, useState } from "react";
import LoadingAnimation from './components/loadAnimation/LoadingAnimation';
import ProductDetailV2 from './components/productdetailv2';
import ProductShowcase from './components/productInfo';
import ExecutiveStudio from './components/productInfoPageV2';
import PricingPage from './components/pricingPage';
import ReactGA from 'react-ga4';



function App() {
  ReactGA.initialize('G-JKCDTLJHVD');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Flickstones - Home";
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time
    const fakeAsyncOperation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust the delay as needed
      setIsLoading(false);
    };

    fakeAsyncOperation();
  }, []);
  return (
    <Router>
      <div className="App">
        <div className={`loading-overlay ${isLoading ? 'visible' : ''}`}>
          {isLoading && <LoadingAnimation />}
        </div>
        <Switch>

          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/tnc" component={TermsAndConditionsPage} />
          <Route path="/faq" component={TermsAndConditions} />
          {/* <Route path="/product/:productId" component={ProductDetailV2} /> */}
          <Route path="/book" component={MultiStepForm} />
          <Route path="/product" component={ProductShowcase} />
          <Route path="/productInfo" component={ExecutiveStudio} />
          {/* <Route path="/pricing" component={PricingPage} /> */}
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
