import React from "react";

import curv from "../../../utils/assets/img/curv.png";
import Container from '@material-ui/core/Container';

import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import {
  List, ListItem, Dialog, TextField, DialogContent, Avatar,
  Menu, MenuItem, CssBaseline, FormControlLabel, Checkbox, Grid
} from '@material-ui/core';
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Typography from '../../../../utils/assets/jss/material-kit-react/components/typography';
// core components
import Button from "../../../../utils/CustomButtons/Button.js";

import styles from "../../../../utils/assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function HeaderLinks(props) {

  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ShoppingCartIcon className={classes.icons} /> Add Product 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ShoppingCartIcon className={classes.icons} /> LogOut
        </Button>
      </ListItem>
    </List>
  );
}
