import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionCarousel from "./Sections/carousel";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import TopPicks from './Sections/dispplay';
// Sections for this page
 import profile from "assets/img/EasyShop.jpeg";
import ProfilePage from './Sections/bestproduct'
import ProductCategories from './Sections/ShopSection'
const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
     <Parallax small filter image={require("assets/img/landing-bg.jpg")}>
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
        
        <SectionCarousel />

        </div>
        <div className={classes.settings}>
        <TopPicks />
        <ProductCategories />
        <ProfilePage />
      </div>
      </div>
      <Footer />
    </div>
  );
}
