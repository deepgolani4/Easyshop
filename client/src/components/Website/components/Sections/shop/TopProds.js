import React from 'react';

import { makeStyles, Paper } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const useStyle = makeStyles({
  root: {
    margin: '0px 70px 70px 70px',
  },
});

export default function TopProds(props) {
  const classes = useStyle();
  const links = [
    'https://cdna.artstation.com/p/assets/images/images/014/492/774/large/shyam-yadav-img-20181207-wa0004.jpg?1544172563',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a5616511439485.560f7aa0666ff.jpg',
  ];
  return (
    <Paper className={classes.root} variant="outlined">
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        margin={10}
        nav={true}
        items={3}
        mouseDrag={true}
        touchDrag={true}
      >
        {links.map((link) => {
          return (
            <div>
              <img src={link} />
            </div>
          );
        })}
      </OwlCarousel>
    </Paper>
  );
}
