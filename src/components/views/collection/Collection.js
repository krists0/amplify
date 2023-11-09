
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import Typography from '@mui/material/Typography';
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "../collection/Collection.css";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";


// export default function Collection() {
//   let imgs = [
   
//     'https://i.imgur.com/0yrTGrf.jpg',
//     'https://i.imgur.com/4wRFLjc.jpg',
//     'https://i.imgur.com/N6GEDJv.jpg',
//     'https://i.imgur.com/BkNdLx0.jpg',
//     'https://i.imgur.com/sw9rKtX.jpg',
//     'https://i.imgur.com/zAM3bAD.jpg',
//     'https://i.imgur.com/vYfFaOK.jpg',
//     'https://i.imgur.com/c1DZbh0.jpg',
//     'https://i.imgur.com/iIvENGe.jpg'
//   ];
 
//   return (
//     <>
//     <div className="collection">
//       <Typography  variant="h4" className='header'
//       sx={{ color:"#13c5a1",mt:"5%", textAlign:'center' ,
     
//     }}
//       >Idans Collection </Typography>
//       <Typography textAlign="center" variant="h5"  color="#13c5a1" padding="5px">Hanna Avia design</Typography>
//         <Swiper
//         loop={true}
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={true}
//           modules={[EffectCoverflow, Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <img src={imgs[0]} alt="img1"/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[1]}  alt="img2"/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[2]}  alt="img3"/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[3]}  alt="img4"/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[4]}  alt="img5"/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[5]}  alt="img6"/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[6]}  alt="img7"/>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[7]}  alt="img8" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={imgs[8]}  alt="img9" />
//           </SwiperSlide>
//         </Swiper>
//     </div>
     
//     </>
//   );
// }


// import React from "react";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// const imgs = [
//   'https://i.imgur.com/0yrTGrf.jpg',
//   'https://i.imgur.com/4wRFLjc.jpg',
//   'https://i.imgur.com/N6GEDJv.jpg',
//   'https://i.imgur.com/BkNdLx0.jpg',
//   'https://i.imgur.com/sw9rKtX.jpg',
//   'https://i.imgur.com/zAM3bAD.jpg',
//   'https://i.imgur.com/vYfFaOK.jpg',
//   'https://i.imgur.com/c1DZbh0.jpg',
//   'https://i.imgur.com/iIvENGe.jpg'
// ];

// const Collection = () => {
//   return (
//     <div>
//       <Typography variant="h4" className="header">
//         Idans Collection
//       </Typography>
//       <Typography variant="h5" color="#13c5a1" padding="5px">
//         Hanna Avia design
//       </Typography>
//       <Grid container spacing={3}>
//         {imgs.map((img, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper>
//               <Card>
//                 <CardContent>
//                   <img src={img} alt={`Image ${index}`} width="100%" />
//                 </CardContent>
//               </Card>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// // export default Collection;
// import React from "react";
// import Typography from "@mui/material/Typography";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// const imgs = [
//   'https://i.imgur.com/0yrTGrf.jpg',
//   'https://i.imgur.com/4wRFLjc.jpg',
//   'https://i.imgur.com/N6GEDJv.jpg',
//   'https://i.imgur.com/BkNdLx0.jpg',
//   'https://i.imgur.com/sw9rKtX.jpg',
//   'https://i.imgur.com/zAM3bAD.jpg',
//   'https://i.imgur.com/vYfFaOK.jpg',
//   'https://i.imgur.com/c1DZbh0.jpg',
//   'https://i.imgur.com/iIvENGe.jpg'
// ];

// const Collection = () => {
//   return (
//     <div>
//       <Typography variant="h4" className="header">
//         Idans Collection
//       </Typography>
//       <Typography variant="h5" color="#13c5a1" padding="5px">
//         Hanna Avia design
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Carousel showArrows={true}>
//             {imgs.map((img, index) => (
//               <div key={index}>
//                 <Card>
//                   <CardContent>
//                     <img src={img} alt={`Image ${index}`} width="100%" />
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </Carousel>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Collection;

import React from "react";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const imgs = [
  'https://i.imgur.com/0yrTGrf.jpg',
  'https://i.imgur.com/4wRFLjc.jpg',
  'https://i.imgur.com/N6GEDJv.jpg',
  'https://i.imgur.com/BkNdLx0.jpg',
  'https://i.imgur.com/sw9rKtX.jpg',
  'https://i.imgur.com/zAM3bAD.jpg',
  'https://i.imgur.com/vYfFaOK.jpg',
  'https://i.imgur.com/c1DZbh0.jpg',
  'https://i.imgur.com/iIvENGe.jpg'
];

const Collection = () => {
  const carouselStyle = {
    width: '480px', // Set your desired width
    height: '480px', // Set your desired height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  };

  const carouselProps = {
    autoPlay: true, // Enable autoplay
    interval: 4000, // Autoplay interval in milliseconds (5 seconds in this case)
    infiniteLoop: true, // Enable infinite looping
    centerMode: true, // Center the images
  
    showStatus: false, // Remove status bar
    // showIndicators: false, // Remove indicators
    showThumbs: false, // Remove thumbnails
    showArrows: true,
    dynamicHeight: false, // Disable dynamic height
  };

  return (
    <div>
      <Typography style={{display:'flex',alignItems: 'center',

justifyContent: 'center'}} variant="h4" className="header">
        Idans Collection
      </Typography>
      <Typography style={{display:'flex',alignItems: 'center',

justifyContent: 'center'}} variant="h5" color="#13c5a1" padding="5px">
        Hanna Avia design
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Carousel showArrows={true} {...carouselProps}>
            {imgs.map((img, index) => (
              <div key={index}>
                <Card style={{display:'flex',alignItems: 'center',borderBlockColor:'white',

    justifyContent: 'center',}}>
                  <CardContent className="carusel-card" style={carouselStyle}>
                    <img src={img} alt={`Image ${index}`} width="100%" />
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};

export default Collection;
