import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles';

import clsx from 'clsx';
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {},
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    paddingTop: '5px',
  },
  mainButton: {
    borderRadius: '6px',
    border: '2px solid grey',
  },
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <TextField
          className={classes.importButton}
          halfwidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize="small" color="action">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          placeholder="Search product"
          variant="outlined"
        />
        <Button className={classes.exportButton}>Log Out</Button>
        <Button color="primary" variant="contained">
          Add product
        </Button>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
