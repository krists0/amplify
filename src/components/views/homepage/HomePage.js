import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import 'react-awesome-slider/dist/styles.css';
import "./homepage.css";

import video1 from "../images/vid1.mp4";

export default function HomePage() {
  return (
    <React.Fragment>
        
      <CssBaseline />
      <div className="homepage" >
           
        <video id="background-video" className='videoTag' autoPlay loop muted>
         
          <source src={video1} type='video/mp4' />
      </video>
      </div>
    </React.Fragment>
  );
}