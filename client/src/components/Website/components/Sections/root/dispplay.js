import React from "react";
// @material-ui/core
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { MDBIcon } from "mdbreact";
// @material-ui/icons
import profile from "../../../../utils/assets/img/EasyShop.jpeg";

import BathtubIcon from '@material-ui/icons/Bathtub';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Card from "../../../../utils/Card/CardSec";
import CardHeader from "../../../../utils/Card/cardheader";
import CardIcon from "../../../../utils/Card/CardIcon";
import CardFooter from "../../../../utils/Card/cardfooter.js";
import GridContainer from "../../../../utils/Grid/GridCont.js";
import GridItem from "../../../../utils/Grid/GridIte.js";
import Danger from "../../../../utils/Typography/Danger.js";
import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "../../../../utils/assets/jss/dispplay-react";
const styles = (theme) => ({
  successText: {
    color: successColor[0]
  },
  upArrowcardtCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardtCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "20px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    fontFamily: "Helvetica"

  },
  cardtCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    fontFamily: "Helvetica"

  },
  cardtTitle: {
    color: grayColor[1],
    marginTop: "10px",
    minHeight: "auto",
    fontWeight: "50",
    paddingTop: "10px",
    fontSize: "25px",
    fontFamily: "Helvetica",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardtTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  }, boxshadow: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
});



function TopPicks(props) {
  const { classes } = props;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{ backgroundImage: "url(" + { profile } + ")" }} className={classes.boxshadow}>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <MDBIcon icon="syringe" />
              </CardIcon>
              <h3 className={classes.cardtTitle}>
                Medicine
              </h3>
              <p className={classes.cardtCategory}>Physical health is priority</p>

            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  In Trending
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card className={classes.boxshadow}>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MDBIcon icon="shopping-basket" />
              </CardIcon>
              <h3 className={classes.cardtTitle}>Groceries</h3>
              <p className={classes.cardtCategory}> Best deals in daily needs </p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Favorite in last 20 hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card className={classes.boxshadow}>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <RestaurantIcon />
              </CardIcon>
              <h3 className={classes.cardtTitle}>Fruits n Veges</h3>

              <p className={classes.cardtCategory}>Give some rest to junk food</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Cheat for perfect diet
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card className={classes.boxshadow}>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <BathtubIcon />
              </CardIcon>
              <h3 className={classes.cardtTitle}>Personal Care</h3>

              <p className={classes.cardtCategory}>Be clean...Be healthy</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                hygiene is big part of daily routines
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>

  );

}

TopPicks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopPicks);