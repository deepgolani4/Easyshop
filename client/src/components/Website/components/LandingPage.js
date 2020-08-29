import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// core components
import Header from "../../utils/Header/Header.js";
import GridContainer from "../../utils/Grid/GridContainer.js";
import GridItem from "../../utils/Grid/GridItem.js";
import Parallax from "../../utils/Parallax/Parallax.js";
import styles from "../../utils/assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import profile from "../../utils/assets/img/EasyShop.jpeg";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const { children,headerlinks,...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={headerlinks}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../utils/assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={profile} alt="..." className={imageClasses} />
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.container}>

        </div>
        <div className={classes.settings}>
          {
            children
          }
        </div>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  children: PropTypes.node,
  headerlinks: PropTypes.node
};