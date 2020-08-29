/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './helper';

import Homepage from './components/Sections/root/index';
import AdminPanel from './components/Sections/admin/index';

export default function HomePage() {
    return (
        <Switch>
            <AuthProvider>
                <Route exact path="/" component={Homepage}/>
                <Route path="/admin" component={AdminPanel} />
            </AuthProvider>
        </Switch>
    )
}