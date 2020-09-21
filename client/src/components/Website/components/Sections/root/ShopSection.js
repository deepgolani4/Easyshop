import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../../../../utils/assets/jss/material-kit-react/components/typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    border: '2px solid white',

    borderRadius: 0,
    height: '30vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: '20vh',
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});
function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://i.ibb.co/PWqbQR0/yellow-copy-space-with-backpack-full-school-supplies-23-2148224289.jpg',
      title: 'Shree Ram Stationary',
      width: '20%',
    },
    {
      url: 'https://i.ibb.co/h26JKHC/vegetarian-evolution-1.jpg',
      title: 'All Fruit Mart',
      width: '20%',
    },
    {
      url: 'https://i.ibb.co/mBZpVVT/images.jpg',
      title: 'Bestro Coffee',
      width: '20%',
    },
    {
      url: 'https://i.ibb.co/1r008vd/gourmet-burger-1024x666.jpg',
      title: 'Enzo & Benzo',
      width: '20%',
    },
    {
      url: 'https://i.ibb.co/yyb9PYw/01-Grocery1-jumbo-v2.jpg',
      title: 'All Mart',
      width: '20%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h4"
      ></Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
