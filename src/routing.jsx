import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './views/CartView.tsx';
import List from './views/ListView';
import Login from './views/LoginView';
import Product from './views/ProductView';

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={List} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/product/:id' component={Product} />
      </Switch>
    </Router>
  );
};
export default Routing;
