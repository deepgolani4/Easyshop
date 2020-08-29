/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './helper';
import LandingPage from './components/LandingPage';
import ProductList from './components/Sections/admin/index';

export default function HomePage() {
    return (
        <Switch>
            <AuthProvider>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/admin" component={ProductList} />
            </AuthProvider>
        </Switch>
    )
}