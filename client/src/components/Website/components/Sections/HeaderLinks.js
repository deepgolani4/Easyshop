/*eslint-disable*/
import React from "react";
import { AuthContext } from '../../helper';
import axios from 'axios';
import curv from "../../../utils/assets/img/curv.png";
import Container from '@material-ui/core/Container';

import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  List, ListItem, Dialog, DialogTitle, TextField, DialogContent, Avatar,
  Menu, MenuItem, CssBaseline, FormControlLabel, Checkbox, Grid, Box
} from '@material-ui/core';
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Typography from '../../../utils/assets/jss/material-kit-react/components/typography';
// im
// core components
import Button from "../../../utils/CustomButtons/Button.js";

import styles from "../../../utils/assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    
  },
}));



const Auth = ({ history }) => {
  const classes = useStyles2()
  const classes1 = useStyles()
  var [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleLoginOldSchool = React.useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    axios.post('http://localhost:5000/login',{
      email:email.value,
      password:password.value
    }).then((res)=>{
      console.log(res.data)
      window.localStorage.setItem('token',res.data);
      window.location.href = '/'
    }).catch(err=>{
      alert('Error Occured. Try after Some Time');
      console.log(err);
    })
  },
    [history]
  );

  const { currentUser } = React.useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser);
    // return window.location.href = '/autonomousai';
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        color="transparent"
        target="_blank"
        className={classes1.navLink}
      >
        <SupervisorAccountIcon className={classes1.icons} /> Admin Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} onSubmit={handleLoginOldSchool}>
                <img src={curv} className={classes.curvyLines}
          alt="curvy lines"/>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
}

const Logged = () => {
  const { currentUser } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchor] = React.useState(null)

  const handleOpen = (e) => {
    // setOpen(!open);
    setAnchor(e.currentTarget);
  }

  const handleClose = () => {
    setAnchor(null);
  }

  return (
    <>
      <Button style={{ margin: 0, padding: 0 }} onClick={handleOpen}>
        <Avatar src={''}>
        </Avatar>
      </Button>
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} anchorOrigin={{ vertical: "bottom" }} onClose={handleClose}>
        <MenuItem onClick={async () => {
          window.localStorage.clear();
          window.location.href = '/'
        }}>
          Sign Out
        </MenuItem>
      </Menu>
    </>
  )
}








export default function HeaderLinks(props) {
  const { currentUser } = React.useContext(AuthContext)
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <div className={classes.search, classes.margin}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <div className={classes.search, classes.margin}>

        </div>
      </ListItem>

      <ListItem className={classes.listItem}>
        {
          currentUser ? <Logged /> : <Auth />
        }
      </ListItem>

      <ListItem className={classes.listItem}>
        <div className={classes.search, classes.margin}>

        </div>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ShoppingCartIcon className={classes.icons} /> Cart
        </Button>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>  */}


    </List>
  );
}
