
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



import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css"; // Import the Swiper styles

import Typography from '@mui/material/Typography';

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import "../collection/Collection.css";
// import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// SwiperCore.use([EffectCoverflow, Pagination]);


// import required modules



export default function Collection() {
  let imgs = [
   
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
 
  return (
    <>
    <div className="collection">
      <Typography  variant="h4" className='header'
      sx={{ color:"#13c5a1",mt:"5%", textAlign:'center' ,
     
    }}
      >Idans Collection </Typography>
      <Typography textAlign="center" variant="h5"  color="#13c5a1" padding="5px">Hanna Avia design</Typography>
      {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
     
    </Swiper>
        */}
        {/* <Swiper
        loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={imgs[0]} alt="img1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[1]}  alt="img2"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[2]}  alt="img3"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[3]}  alt="img4"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[4]}  alt="img5"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[5]}  alt="img6"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[6]}  alt="img7"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[7]}  alt="img8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgs[8]}  alt="img9" />
          </SwiperSlide>
        </Swiper> */}
    </div>
     
    </>
  );
}
