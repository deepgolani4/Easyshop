import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from '../../../../utils/Header/Header.js';
import HeaderLinks from './HeaderLinks';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Loading from '../../../Loading.js';
import Parallax from '../../../../utils/Parallax/Parallax.js';

import Map from './maps';
import TopProds from './TopProds.js';

const useStyle = makeStyles({
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
});

const ShopComp = (props) => {
  const classes = useStyle();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Get data of the store from backend
    setData({
      name: 'All Maart',
      logo: 'url',
      maps_url:
        'https://www.google.com/maps/embed/v1/place?key=AIzaSyB387HYMPGb934bjW6nWNDt7jT6QhUmBTw&q=Space+Needle,Seattle+WA',
    });
  }, []);
  console.log(data);
  return data ? (
    <div>
      <Header
        color="secondary"
        brand="EasyShop"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: 'white',
        }}
      />
      <Parallax style={{ justifyContent: 'center' }} small image={''}>
        <Typography component="h1" variant="h2" align="center">
          {data.name}
        </Typography>
      </Parallax>
      <TopProds />
      <div className={classes.main}>
        <Grid container>
          <Grid item sm={12}>
            <Map />
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default function Shop() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${url}/:id`}
        component={(props) => {
          return <ShopComp id={props.match.params.id} />;
        }}
      />
    </Switch>
  );
}
