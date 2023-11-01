
// import vid2 from "../images/Hanna1.mp4";
// export default function VidDivider(){


//     return (
//       <>
//       <div className="divdervideo" >
           
//            <video id="background-video" className='videoTag' autoPlay loop muted>
            
//              <source src={vid2} type='video/mp4' />
//          </video>
//          </div>
//       </>
        
//     );
// }
import React from 'react';
import vid2 from "../images/Hanna1.mp4";

export default function VidDivider() {
  return (
    <>
      <div className="divdervideo">
        <video id="background-video" className='videoTag' autoPlay loop muted>
          <source src={vid2} type='video/mp4' />
        </video>
      </div>
    </>
  );
}