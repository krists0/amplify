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
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import Icon from '@mui/material/Icon';
// export default function Contact(){

//     return(
//         <>
//        <div className="contact">
//         <Typography variant='h3' textAlign="center" className="header"
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
//                              +1-8186216658 
                                
//                 </Typography> 
//                 <MailRoundedIcon  />
//                 <Typography 
//                     sx={ {
                       
//                         color: "rgb(105, 107, 107)",
                       
                      
//                         }}
//                     variant="h6"  fontSize="1.2rem" gutterBottom>
                       
                           
//                                     Hannaaviah@gmail.com
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
import "../contact/Contact.css";
import React from 'react';
import map from "../images/MAP.png";


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import Icon from '@mui/material/Icon';
export default function Contact(){

    return(
        <>
       <div className="contact">
        <Typography style={{fontSize: '2.125rem',}} variant='h3' textAlign="center" className="header"
            paddingTop="10%" color="#13c5a1">Contact</Typography>
        
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 850,
        flexGrow: 1,
        mt:'5%',
        maxHeight:600,
       
        
       
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container >
         
            <Grid item sx={ {
                        
                        color: "rgb(105, 107, 107)",
                       mx: 'auto',
                       mt:'2%'
                        }}  >
                
              <AddLocationAltRoundedIcon 
              sx={{ color: 'primery', mx: 'auto' }}/>
              <Typography 
                    sx={ {
                        
                        color: "rgb(105, 107, 107)",
                       
                        }}
                    variant="h6"  fontSize="1.2rem" gutterBottom>
                       
                        California,Los Angeles,<br/>
                                    Sherman Oaks, 
                                    United States
                                   
                </Typography> 
                <AddIcCallRoundedIcon/>
              <Typography 
                    sx={ {                      
                        color: "rgb(105, 107, 107)",
                        }}
                    variant="h6"  fontSize="1.2rem" gutterBottom>
                             Hanna Avia <br/>
                             +1-8186216658 
                                
                </Typography> 
                <MailRoundedIcon  />
                <Typography 
                    sx={ {
                       
                        color: "rgb(105, 107, 107)",
                       
                      
                        }}
                    variant="h6"  fontSize="1.2rem" gutterBottom>
                       
                           
                                    Hannaaviah@gmail.com
{/* 
                                <Typography
              variant="body2" color="rgb(110, 205, 173)" mt="5%">
                "Emerald is a symbol of power and wealth"
              </Typography> */}
                </Typography>
               
              
              
           
            
          </Grid>
        
        </Grid>
          <ButtonBase sx={{ width: 800, height: 300, marginRight:0, }}>
          <img
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:' center',
            width: '120% ',
            height: '100% ',
          }}
          
          id="map" src={map} alt="map"></img>
            
          </ButtonBase>
        
       
      </Grid>
    </Paper>

        
        </div>
        </>
    );
}