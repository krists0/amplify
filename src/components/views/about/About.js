// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination,Autoplay,  Navigation  } from "swiper";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./About.css";
// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// export default function About() {
//   return (
//     <div className='About'>
//       <Typography variant='h4' textAlign="center"
//       paddingTop="3%" color="#13c5a1"
//       >About me</Typography>
//     <Paper
//       sx={{
//         p: 2,
//         margin: 'auto',
//         maxWidth: 800,
//         flexGrow: 1,
//         mt:'5%',
//         maxHeight:'50%',
//         fontStyle:'italic',
        
//         backgroundColor: (theme) =>
//           theme.palette.mode === 'dark' ? '#1A2027' : '#65e4cbb3',
//       }}
//     >
//       <Grid container spacing={2}>
//         <Grid item  style={{width:'200px'}}>
//           {/* <ButtonBase sx={{ width: 720, height: 500, marginLeft:-25, mt:'5%' }}> */}
//           <ButtonBase sx={{ width: 720, height: 500, marginLeft:-25, mt:'1%' }}>
//               <Swiper
//                 spaceBetween={10}
//                 centeredSlides={true}
//                 autoplay={{
//                   delay: 4000,
//                   disableOnInteraction: false,
//                 }}
//                 pagination={{
//                   clickable: true,
//                 }}
               
//                 modules={[Autoplay, ]}
//                 className="mySwiper" 
//           >
//             <SwiperSlide className='img_hanna'><Img  alt="complex" src="https://i.imgur.com/qPJtnnp.jpeg" /></SwiperSlide>
//             <SwiperSlide className='img_hanna'><Img  alt="complex" src="https://i.imgur.com/6vmFney.jpeg" /></SwiperSlide>
            
//           </Swiper>
            
//           </ButtonBase>
//         </Grid>
//         <Grid item xs={12} sm container >
//           <Grid item xs container direction="column"  >
//             <Grid item   >
             
//               <Typography className='about-text'
//                gutterBottom >
//               Welcome to Hanna avia store, 
//               an exclusive one-of-a-kind Emerald Jewelry Designer!
//                Explore my  unique selection of 
//                hand-crafted emerald jewelry for all occasions.
//                 Immerse yourself in our beautiful collection of necklaces,
//                  rings and earrings and allow one of our exquisite creations 
//                  to take your breath away! Master craftsmanship meets luxury 
//                  and style - shop now and experience the distinguished elegance
//                   of my jewelry.


//               </Typography>
//               <Typography 
//               sx={
//                 {
//                   ml:'-20%',
//                   mt:'20%',
                

//                 }
//               }
              
//               variant="body2" color="text.secondary">
              
//               </Typography>
//             </Grid>
            
//           </Grid>
        
//         </Grid>
//       </Grid>
//     </Paper>
//     </div>
//   );
// }



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "./About.css";
// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// const ImageContainer = styled('div')({
//   position: 'relative',
//   zIndex: 1,
//   marginLeft: '-25px', // Adjust this to control the image position
// });

// export default function About() {
//   return (
//     <div className='About'>
//       <Typography className='header' variant='h4' textAlign="center" paddingTop="3%" color="#13c5a1">
//         About me
//       </Typography>
//       <Paper
//         sx={{
//           p: 2,
//           margin: 'auto',
//           maxWidth: 800,
//           flexGrow: 1,
//           mt: '5%',
//           maxHeight: '50%',
//           fontStyle: 'italic',
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'dark' ? '#1A2027' : '#65e4cbb3',
//         }}
//       >
//         <Grid container spacing={2}>
//           {/* Display the image inside the Paper component on mobile screens */}
//           <Grid item xs={12} sm={6}>
//             <ImageContainer>
              
//                 <Swiper
//                   spaceBetween={10}
//                   centeredSlides={true}
//                   autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: false,
//                   }}
//                   modules={[Autoplay]}
//                   className="mySwiper"
//                 >
//                   <SwiperSlide className='img_hanna'><Img alt="complex" src="https://i.imgur.com/qPJtnnp.jpeg" /></SwiperSlide>
//                   <SwiperSlide className='img_hanna'><Img alt="complex" src="https://i.imgur.com/6vmFney.jpeg" /></SwiperSlide>
//                 </Swiper>
             
//             </ImageContainer>
//           </Grid>
//           {/* Display the text below the image */}
//           <Grid item xs={12} sm={6}>
//             <Typography className='about-text' gutterBottom>
//               Welcome to Hanna avia store, an exclusive one-of-a-kind Emerald Jewelry Designer! Explore my unique selection of hand-crafted emerald jewelry for all occasions. Immerse yourself in our beautiful collection of necklaces, rings, and earrings and allow one of our exquisite creations to take your breath away! Master craftsmanship meets luxury and style - shop now and experience the distinguished elegance of my jewelry.
//             </Typography>
//             <Typography variant="body2" color="text.secondary"></Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import Swiper CSS
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Pagination, Autoplay } from 'swiper';
// import './About.css';

// // Initialize Swiper modules
// Swiper.use([Pagination, Autoplay]);

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// const ImageContainer = styled('div')({
//   position: 'relative',
//   zIndex: 1,
//   marginLeft: '-25px',
// });

// export default function About() {
//   return (
//     <div className='About'>
//       <Typography className='header' variant='h4' textAlign="center" paddingTop="3%" color="#13c5a1">
//         About me
//       </Typography>
//       <Paper
//         sx={{
//           p: 2,
//           margin: 'auto',
//           maxWidth: 800,
//           flexGrow: 1,
//           mt: '5%',
//           maxHeight: '50%',
//           fontStyle: 'italic',
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'dark' ? '#1A2027' : '#65e4cbb3',
//         }}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <ImageContainer>
//               <Swiper
//                 spaceBetween={10}
//                 centeredSlides={true}
//                 modules={[Pagination, Autoplay]} // Add the Pagination and Autoplay modules
//                 autoplay={{
//                   delay: 4000,
//                   disableOnInteraction: false,
//                 }}
//                 className="mySwiper"
//               >
//                 <SwiperSlide className='img_hanna'><Img alt="complex" src="https://i.imgur.com/qPJtnnp.jpeg" /></SwiperSlide>
//                 <SwiperSlide className='img_hanna'><Img alt="complex" src="https://i.imgur.com/6vmFney.jpeg" /></SwiperSlide>
//               </Swiper>
//             </ImageContainer>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography className='about-text' gutterBottom>
//               Welcome to Hanna avia store, an exclusive one-of-a-kind Emerald Jewelry Designer! Explore my unique selection of hand-crafted emerald jewelry for all occasions. Immerse yourself in our beautiful collection of necklaces, rings, and earrings and allow one of our exquisite creations to take your breath away! Master craftsmanship meets luxury and style - shop now and experience the distinguished elegance of my jewelry.
//             </Typography>
//             <Typography variant="body2" color="text.secondary"></Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }

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
                <div className='img_hanna'>
                  <img alt="complex" src="https://i.imgur.com/6vmFney.jpeg" />
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
