import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Menu from './pages/Menu';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
