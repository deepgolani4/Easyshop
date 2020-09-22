import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from '../../../../utils/Header/Header.js';
import HeaderLinks from './HeaderLinks';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

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
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paginationAdjust: {
    alignContent: 'center',
    margin: '25px 25px 25px 46%',
  },
});

const ShopComp = (props) => {
  const classes = useStyle();
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const handleChangePage = (e, val) => {
    setPage(val);
  };
  React.useEffect(() => {
    // Get data of the store from backend
    setData({
      name: 'All Maart',
      logo: 'url',
      maps_url:
        'https://www.google.com/maps/embed/v1/place?key=AIzaSyB387HYMPGb934bjW6nWNDt7jT6QhUmBTw&q=Space+Needle,Seattle+WA',
      products: [
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'Classmate',
          price: '100',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
        {
          name: 'Classmate',
          price: '100',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
        {
          name: 'Classmate',
          price: '100',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
        {
          name: 'Classmate',
          price: '100',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'maggie',
          price: '20',
          image:
            'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F6%2F0%2F9%2F15379060-1-eng-GB%2FR20180823%20Maggi%20noodle_2048x1152.jpg?source=nar-cms',
        },
        {
          name: 'Classmate',
          price: '20',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
        {
          name: 'Classmate',
          price: '20',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
        {
          name: 'Classmate',
          price: '20',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
        {
          name: 'Classmate',
          price: '20',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL.jpg',
        },
      ],
    });
  }, []);
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

      <Paper>
        <Container>
          <Grid container>
            {data.products.slice(page * 9 - 9, page * 9).map((prod, i) => {
              return (
                <Grid item xs={4}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={prod.image}
                        title={prod.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {prod.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Typography>Price: {prod.price}</Typography>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Grid container>
            <Grid className={classes.paginationAdjust} item xs={12}>
              <Pagination
                onChange={handleChangePage}
                page={page}
                count={Math.round(data.products.length / 9)}
                color="primary"
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>
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
