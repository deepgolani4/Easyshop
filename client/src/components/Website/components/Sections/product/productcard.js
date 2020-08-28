import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "../../../../utils/assets/jss/dispplay-react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainRaised: {

    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  mainButton: {
    padding: "4px 4px 4px 4px",
    margin: "0px 1.0vw 0px",
    borderRadius: "6px",
    border: "2px solid grey"
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  plusminus: {
    fontSize: "20px"
  },
  modify: {
    fontWeight: "50",
    color: grayColor[1],
    margin: "0",
    fontSize: "30px",
    marginTop: "3px",
    marginBottom: "3px",
    fontFamily: "Helvetica",
  }


}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, classes.mainRaised)}
      {...rest}
    >
      <CardContent>
        <Box display="flex"
          justifyContent="center"
          className={classes.modify}
          mb={3}
        >
          <Avatar alt="product"
            className={classes.modify}
            src={product.media}
            variant="square"
          />
        </Box>

        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
          className={classes.modify}
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <Box p={2} >
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <ExposurePlus1Icon
              className={classes.statsIcon, classes.mainButton}
              color="action"
            />
            <ExposureNeg1Icon
              className={classes.statsIcon, classes.mainButton}
              color="action"
            />
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <GetAppIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="grey"
              display="inline"
              variant="body2"
            >
              {product.totalDownloads}
              {' '}
              available
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
