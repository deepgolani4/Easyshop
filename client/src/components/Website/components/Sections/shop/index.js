import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from "../../../../utils/Header/Header.js";
import HeaderLinks from './HeaderLinks';

const ShopComp = (props) => {
    return (
        <div>
            <Header
                color="secondary"
                brand="EasyShop"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 100,
                    color: "white"
                }}
            />
        </div>
    )
}



export default function Shop() {
    const { url } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${url}/:id`} component={(props) => {
                return <ShopComp id={props.match.params.id} />
            }} />
        </Switch>
    )
}