/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './helper';

import Homepage from './components/Sections/root/index';
import AdminPanel from './components/Sections/admin/index';
import Shop from './components/Sections/shop/index';

export default function HomePage() {
  return (
    <Switch>
      <AuthProvider>
        <Route exact path="/" component={Homepage} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/shop" component={Shop} />
      </AuthProvider>
    </Switch>
  );
}
