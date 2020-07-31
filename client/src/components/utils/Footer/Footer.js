/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// import styles from "../assets/jss/material-kit-react/components/footerStyle.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    padding: "0.9375rem 0",
    // textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  title: {
    fontWeight: 800,
    fontSize: "18px",
    textAlign:"center"
  },
  content: {
    fontSize: "14px",
    textAlign:"center"
  }
});

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <Container>
        <GridContainer fluid>
          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.title}>Address</div>
            <div className={classes.content}>
              R.O. : H.N. 119, GF, Kh. NO. 123/10/2, 123/11/1, Sant Nagar, Burari, New Delhi - 110084
              </div>
            <div className={classes.content}>
              Works: A-217, GF, Gali No. 11 & 12, Phase 1, Vijay Vihar, New Delhi - 110085
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.title}>Call Us</div>
            <div className={classes.content}>
              Mr. Anand Kumar Jha <Link underline="none" href="tel:+919717838798">+91-9717838798</Link>
            </div>
            <div className={classes.content}>
              Telephone <Link underline="none" href="tel:01127055798">011-27055798</Link>
            </div>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.title}>Email Us</div>
            <div className={classes.content}>
              <Link underline="none" href="mailto:info@samkalp.org.in">info@samkalp.org.in</Link>
            </div>
            <div className={classes.content}>
              <Link underline="none" href="mailto:samkalp0013@gmail.com">samkalp0013@gmail.com</Link>
            </div>
          </GridItem>
        </GridContainer>

      </Container>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
