import React, { Component } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LandingPage from '../../LandingPage';
import HeaderLinks from '../admin/headerLinks';
import ProductCard from './productcard';
import Page from './Page';



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
    productCard: {
        height: '100%',
    },
    mainRaised: {
        padding: '10px 10px 10px 0px',
        margin: '0px 1.9vw 0px',
        borderRadius: '6px',
        boxShadow:
            '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
}));


var data = [
    {
        src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-green-select-2019_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1567021766404",
        title: "iPhone",
        subTitle: "Apple",
        color: "White",
        price: "800",
    },
    {
        src: "https://images-na.ssl-images-amazon.com/images/I/71s9FMKzr%2BL._SL1500_.jpg",
        title: "Headphones",
        subTitle: "Sony",
        color: "Red",
        price: "200",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM9C9aP58i8tP7Es4wi9Jp2ZQDsHowg3c0pw&usqp=CAU",
        title: "iPad Pro",
        subTitle: "It’s a magical piece of glass.It’s so fast most PC laptops can’t catch up. It has pro cameras that can transform reality. And you can use it with touch, pencil, keyboard and now trackpad.It’s the new iPad Pro.",
        color: "Gold",
        price: "600",
    },
];


export default function ShopSearch() {
    const classes = useStyles();
    const [products, setProducts] = React.useState(data);

    React.useEffect(() => {
        setProducts((products) => [...products]);
    }, []);

    return (

        <Page
            className={(classes.root, classes.mainRaised)}
            title="Search"
        >
            <Container maxWidth={false}>
                {/* <Toolbar /> */}
                <Box mt={3}>
                    <Grid container spacing={3}>
                        {products.map((product) => (
                            <Grid item key={product.id} lg={4} md={6} xs={12}>
                                <ProductCard
                                    className={classes.productCard}
                                    product={product}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box mt={3} display="flex" justifyContent="center"></Box>
            </Container>
        </Page>

    )
}
