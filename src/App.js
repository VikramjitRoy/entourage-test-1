import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUsPage from './components/aboutuspage';
import HomePage from './components/homepage';
import ContactUsPage from './pages/ContactUsPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/" component={HomePage} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
}

export default App;
