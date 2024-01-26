
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
// // import "swiper/css";
// // import "swiper/css/effect-coverflow";
// // import "swiper/css/pagination";
// import Icon from '@mui/material/Icon';
// export default function Contact(){

//     return(
//         <>
//        <div className="contact">
//         <Typography style={{fontSize: '2.125rem',}} variant='h3' textAlign="center" className="header"
//             paddingTop="10%" color="#13c5a1">Contact</Typography>
        
//         <Paper
//       sx={{
//         p: 2,
//         margin: 'auto',
//         maxWidth: 850,
//         flexGrow: 1,
//         mt:'5%',
//         maxHeight:600,
       
        
       
//       }}
//     >
//       <Grid container spacing={2}>
        
//         <Grid item xs={12} sm container >
         
//             <Grid item sx={ {
                        
//                         color: "rgb(105, 107, 107)",
//                        mx: 'auto',
//                        mt:'2%'
//                         }}  >
                
//               <AddLocationAltRoundedIcon 
//               sx={{ color: 'primery', mx: 'auto' }}/>
//               <Typography 
//                     sx={ {
                        
//                         color: "rgb(105, 107, 107)",
                       
//                         }}
//                     variant="h6"  fontSize="1.2rem" gutterBottom>
                       
//                         California,Los Angeles,<br/>
//                                     Sherman Oaks, 
//                                     United States
                                   
//                 </Typography> 
//                 <AddIcCallRoundedIcon/>
//               <Typography 
//                     sx={ {                      
//                         color: "rgb(105, 107, 107)",
//                         }}
//                     variant="h6"  fontSize="1.2rem" gutterBottom>
//                              Hanna Avia <br/>
//                              +1 (424) 335-8829
                                
//                 </Typography> 
//                 <MailRoundedIcon  />
//                 <Typography 
//                     sx={ {
                       
//                         color: "rgb(105, 107, 107)",
                       
                      
//                         }}
//                     variant="h6"  fontSize="1.2rem" gutterBottom>
                       
                           
//                        annarudnaia1517@gmail.com
// {/* 
//                                 <Typography
//               variant="body2" color="rgb(110, 205, 173)" mt="5%">
//                 "Emerald is a symbol of power and wealth"
//               </Typography> */}
//                 </Typography>
               
              
              
           
            
//           </Grid>
        
//         </Grid>
//           <ButtonBase sx={{ width: 800, height: 300, marginRight:0, }}>
//           <img
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent:' center',
//             width: '120% ',
//             height: '100% ',
//           }}
          
//           id="map" src={map} alt="map"></img>
            
//           </ButtonBase>
        
       
//       </Grid>
//     </Paper>

        
//         </div>
//         </>
//     );
// }


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
//                 <AddLocationAltRoundedIcon sx={{ color: 'primary', mx: 'auto'}} />
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
//                   +1 (424) 335-8829
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
//  }
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
//           <Grid container spacing={2} justifyContent="center">
//             <Grid item xs={12} sm container sx={{
//               color: "rgb(105, 107, 107)",
//               textAlign: 'center',
//             }}>
//               <Grid item>
//                 <AddLocationAltRoundedIcon sx={{ color: 'primary', mx: 'auto' }} />
//                 <Typography sx={{
//                   color: "rgb(105, 107, 107)",
//                 }} variant="h6" fontSize="1.2rem" gutterBottom>
//                   California, Los Angeles,<br />
//                   Sherman Oaks,
//                   United States
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <AddIcCallRoundedIcon />
//                 <Typography sx={{
//                   color: "rgb(105, 107, 107)",
//                 }} variant="h6" fontSize="1.2rem" gutterBottom>
//                   Hanna Avia <br />
//                   +1 (424) 335-8829
//                 </Typography>
//               </Grid>
//               <Grid item>
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


import React from 'react';
import map from '../images/MAP.png';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const phoneNumber = '+14243358829'; // Replace with your phone number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`);
  };

  return (
    <div className="contact-container">
      <Paper
        sx={{
          p: 3,
          margin: 'auto',
          maxWidth: 800,
          flexGrow: 1,
          mt: '5%',
          borderRadius: 16,
          backgroundColor: '#fff3d6', // Light green background color
        }}
      >
        <Grid container spacing={3}>
        <Grid item xs={12} sm container justifyContent="center">
  <Grid item style={{ textAlign: 'center', marginBottom: '10px',margin:'10px' }}>
    <AddLocationAltRoundedIcon style={{ color: '#4caf50', fontSize: '2.5rem', marginBottom: '1px' }} />
    <Typography variant="h6" style={{ fontSize: '1.5rem', color: '#333' }} gutterBottom>
      California, Los Angeles,<br />
      Sherman Oaks,
      United States
    </Typography>
  </Grid>
  <Grid item style={{ textAlign: 'center', marginBottom: '10px', margin: '10px' }}>
  <IconButton onClick={openWhatsApp} style={{ fontSize: '2.5rem', marginBottom: '5px', color: '#25D366' }}>
    <WhatsAppIcon />
  </IconButton>
  <Typography variant="h6" style={{ fontSize: '1.5rem', color: '#333' }} gutterBottom>
    Hanna Avia <br />
    +1 (424) 335-8829
  </Typography>
</Grid>



            <Grid item sx={{ textAlign: 'center' }}>
              <MailRoundedIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
              <Typography variant="h6" fontSize="1.5rem" color="#333" gutterBottom>
                annarudnaia1517@gmail.com
              </Typography>
              
            </Grid>
          </Grid>
          <ButtonBase sx={{ width: '100%', height: 350,  overflow: 'hidden' }}>
            <img
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                marginLeft:'3%',
              }}
              id="map"
              src={map}
              alt="map"
            />
          </ButtonBase>
        </Grid>
      </Paper>
    </div>
  );
};

export default Contact;
