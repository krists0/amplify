

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './About.css';

const ImageContainer = styled('div')({
  position: 'relative',
  zIndex: 1,
  marginLeft: '-25px',
});

export default function About() {
  const carouselProps = {
    autoPlay: true, // Enable autoplay
    interval: 4000, // Autoplay interval in milliseconds (4 seconds in this case)
    infiniteLoop: true, // Enable infinite looping
    centerMode: true, // Center the images
    showStatus: false, // Remove status bar
    showIndicators: false, // Remove indicators
    showThumbs: false, // Remove thumbnails
    showArrows: true,
    dynamicHeight: false, // Disable dynamic height
  };

  return (
    <div className='About'>
      <Typography className='header' variant='h4' textAlign="center" paddingTop="3%" color="#13c5a1">
        About me
      </Typography>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 800,
          flexGrow: 1,
          mt: '5%',
          maxHeight: '50%',
          fontStyle: 'italic',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#65e4cbb3',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ImageContainer>
              <Carousel {...carouselProps}>
                <div className='img_hanna'>
                  <img alt="complex" src="https://i.imgur.com/qPJtnnp.jpeg" />
                </div>
                {/* <div className='img_hanna'>
                  <img alt="complex" src="https://i.imgur.com/6vmFney.jpeg" />
                </div> */}
                <div className='img_hanna'>
                  <img alt="complex" src="https://i.ibb.co/k0jnCGk/Whats-App-Image-2023-02-10-at-22-01-41.jpg" />
                </div>
              </Carousel>
            </ImageContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className='about-text' gutterBottom>
              Welcome to Hanna avia store, an exclusive one-of-a-kind Emerald Jewelry Designer! Explore my unique selection of hand-crafted emerald jewelry for all occasions. Immerse yourself in our beautiful collection of necklaces, rings, and earrings and allow one of our exquisite creations to take your breath away! Master craftsmanship meets luxury and style - shop now and experience the distinguished elegance of my jewelry.
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
