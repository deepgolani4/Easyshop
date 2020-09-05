/*eslint-disable*/
import React from "react";
import { AuthContext } from '../../../helper';
import encrypt_ from '../../../../../helpers/jsonEncrypt';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  List, ListItem, Dialog, TextField, DialogContent, Avatar,
  CssBaseline, FormControlLabel, Checkbox, Grid, Button,
  Link as Link_
} from '@material-ui/core';
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";
import Typography from "../../../../utils/assets/jss/material-kit-react/components/typography";
import CustomDropdown from "../../../../utils/CustomDropdown/CustomDropdown";

import styles from "../../../../utils/assets/jss/material-kit-react/components/headerLinksStyle.js";

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
  }, curvyLines: {
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
    axios.post('http://localhost:5000/login', {
      payload: encrypt_({
        email: email.value,
        password: password.value
      })
    }).then((res) => {
      console.log(res.data)
      window.localStorage.setItem('token', res.data);
      window.location.href = '/'
    }).catch(err => {
      console.log(err);
      alert('Error Occured. Try after Some Time');
    })
  },
    [history]
  );

  const { currentUser } = React.useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser);
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
  const history = useHistory();
  return (
    <CustomDropdown
      left
      caret
      hoverColor="black"
      buttonText={"Account"}
      buttonProps={{
        className:
          'classes.navLink' + " " + 'classes.imageDropdownButton',
        color: "transparent"
      }}
      dropdownList={[
        <div onClick={() => history.push('/admin')}>Admin Panel</div>,
        <div onClick={async () => {
          window.localStorage.setItem('token','');
          window.location.reload()
        }}> Sign Out </div>
      ]}
    />
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
    </List>
  );
}
