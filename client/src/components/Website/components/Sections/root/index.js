import React from 'react';
import LandingPage from '../../LandingPage';

import TopPicks from './dispplay';
import HeaderLinks from "./HeaderLinks";
import ProfilePage from './bestproduct'
import ProductCategories from './ShopSection'

export default function Homepage() {
    return (
        <LandingPage headerlinks={<HeaderLinks />}>
            <TopPicks />
            <ProductCategories />
            <ProfilePage />
        </LandingPage>
    )
}