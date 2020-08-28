import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components

import GridContainer from "../../../../utils/Grid/GridContainer";
import GridItem from "../../../../utils/Grid/GridItem";
import NavPills from "../../../../utils/NavPills/NavPills";

import studio1 from "../../../../utils/assets/img/examples/studio-1.jpg";
import studio2 from "../../../../utils/assets/img/examples/studio-2.jpg";
import studio3 from "../../../../utils/assets/img/examples/studio-3.jpg";
import studio4 from "../../../../utils/assets/img/examples/studio-4.jpg";
import studio5 from "../../../../utils/assets/img/examples/studio-5.jpg";
import work1 from "../../../../utils/assets/img/examples/olu-eletu.jpg";
import work2 from "../../../../utils/assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../../../utils/assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../../../utils/assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../../../utils/assets/img/examples/clem-onojegaw.jpg";

import styles from "../../../../utils/assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Grocery",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={6} md={4}>
                        <img
                          alt="..."
                          src={studio1}
                          className={navImageClasses

                          }
                        />
                        <img
                          alt="..."
                          src={studio2}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={4}>
                        <img
                          alt="..."
                          src={studio5}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio4}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "self care",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={6} md={4}>
                        <img
                          alt="..."
                          src={work1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work3}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={4}>
                        <img
                          alt="..."
                          src={work4}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work5}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "stationery",
                  tabIcon: Favorite,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={6} md={4}>
                        <img
                          alt="..."
                          src={work4}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio3}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={4}>
                        <img
                          alt="..."
                          src={work2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio1}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
