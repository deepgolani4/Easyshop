import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from './page.js';
import data from './data.js';
import ProductCard from './productcard';
import Toolbar from './ToolBar'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../helper';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  },
  mainRaised: {
    padding: "10px 10px 10px 0px",
    margin: "0px 1.9vw 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
}));

export default function ProductList() {
  const { currentUser } = React.useContext(AuthContext);
  const classes = useStyles();
  const [products, setProducts] = React.useState(data);

  React.useEffect(() => {
    setProducts(products => [...products])
  },[])

  return currentUser ? (
    <Page
      className={classes.root, classes.mainRaised}
      title="Products"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
        </Box>
      </Container>
    </Page>
  ) : <Redirect to="/" />
};