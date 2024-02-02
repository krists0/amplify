

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
      <img alt="complex" src="https://i.imgur.com/qPJtnnp.jpeg" style={{ width: '120%', height: '100%' }} />
    </div>
    {/* <div className='img_hanna'>
      <img alt="complex" src="https://i.imgur.com/6vmFney.jpeg" style={{ width: '100%', height: '100%' }} />
    </div> */}
    <div className='img_hanna2'>
      <img alt="hanna" src="https://i.imgur.com/ZJCBVzn.jpg" style={{ width: '90%', height: '100%' }} />
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


// import "../contact/Contact.css";
// import React from 'react';
// import map from "../images/MAP.png";
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
// import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
// import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
// import MailRoundedIcon from '@mui/icons-material/MailRounded';
// import IconButton from '@mui/material/IconButton';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// export default function Contact() {
//   const phoneNumber = "+14243358829"; // Replace with your phone number

//   const openWhatsApp = () => {
//     window.open(`https://wa.me/${phoneNumber}`);
//   };

//   return (
//     <>
//       <div className="contact">
//         <Typography style={{ fontSize: '2.125rem' }} variant='h3' textAlign="center" className="header" paddingTop="10%" color="#13c5a1">
//           Contact
//         </Typography>

//         <Paper
//           sx={{
//             p: 2,
//             margin: 'auto',
//             maxWidth: 850,
//             flexGrow: 1,
//             mt: '5%',
//             maxHeight: 600,
//           }}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm container>
//               <Grid item sx={{
//                 color: "rgb(105, 107, 107)",
//                 mx: 'auto',
//                 mt: '2%'
//               }}>
//                 <AddLocationAltRoundedIcon sx={{ color: 'primary', mx: 'auto' }} />
//                 <Typography sx={{
//                   color: "rgb(105, 107, 107)",
//                 }} variant="h6" fontSize="1.2rem" gutterBottom>
//                   California, Los Angeles,<br />
//                   Sherman Oaks,
//                   United States
//                 </Typography>
//                 <AddIcCallRoundedIcon />
//                 <Typography sx={{
//                   color: "rgb(105, 107, 107)",
//                 }} variant="h6" fontSize="1.2rem" gutterBottom>
//                   Hanna Avia <br />
//                   +1 (424) 335-8829 :
//                 </Typography>
//                 <MailRoundedIcon />
//                 <Typography sx={{
//                   color: "rgb(105, 107, 107)",
//                 }} variant="h6" fontSize="1.2rem" gutterBottom>
//                   annarudnaia1517@gmail.com
//                 </Typography>
//                 <IconButton onClick={openWhatsApp} sx={{ color: '#25D366', mt: 2 }}>
//                   <WhatsAppIcon />
//                 </IconButton>
//               </Grid>
//             </Grid>
//             <ButtonBase sx={{ width: 800, height: 300, marginRight: 0 }}>
//               <img
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   width: '120% ',
//                   height: '100% ',
//                 }}
//                 id="map" src={map} alt="map"
//               />
//             </ButtonBase>
//           </Grid>
//         </Paper>
//       </div>
//     </>
//   );
// }
