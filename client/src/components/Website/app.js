/* eslint-disable */
import React from 'react';
import { Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './helper';
import LandingPage from './components/LandingPage';


const theme = createMuiTheme({

});

export default function HomePage() {
    return (
        <Switch>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <LandingPage />
                </ThemeProvider>
            </AuthProvider>
        </Switch>
    )
}