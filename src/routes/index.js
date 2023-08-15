import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AppHeader from './AppHeader';
// import Home from './Home';
// import Services from './Services';
// import About from './About';
import Appbar from '../components/appbar';
import { Product } from '../styles/product';
import Products from '../components/products'

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Appbar} />
          <Route path="/services" component={Products} />
          {/* <Route path="/about" component={About} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;