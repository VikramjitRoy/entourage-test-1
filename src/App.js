import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUsPage from './components/aboutuspage';
import HomePage from './components/homepage';
import ContactUsPage from './pages/ContactUsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import FaqPage from './pages/FaqPage';
import ServicesPage from './pages/ServicesPage';
import { useEffect, useState } from "react";
import LoadingAnimation from './components/loadAnimation/LoadingAnimation';
import ProductDetailV2 from './components/productdetailv2';



function App() {

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
          <Route path="/faq" component={FaqPage} />
          <Route path="/product/:productId" component={ProductDetailV2} />
          <Route path="/" component={HomePage} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
