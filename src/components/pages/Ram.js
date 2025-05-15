import * as React from 'react';
import { Link } from 'react-router-dom';
import notes  from '../../notes.PNG';
import spills from '../../spills.jpeg';
import air from '../../air.mp4';


function Ram() {
  return (
    <>
      <Link to="/">Home</Link><span>&nbsp;</span><span>&nbsp;</span>
      <Link to="/works">Works </Link>
   

      <br></br><br></br>
       
        <Link to="/dates">  ✮⋆˙05.12.25 - 05.13.25 ̤̮ </Link> <br></br><br></br>

        <Link to="/dates_1">  ✮⋆˙05.13.25 - 05.14.25 ̤̮ </Link>
       <br></br><br></br>
              <img src={notes} className="notes" alt="logo" />  <span>&nbsp;</span><span>&nbsp;</span>
              <img src={spills} className="spills" alt="logo" />  <span>&nbsp;</span><span>&nbsp;</span>
       
         <video controls width="70%" className="air">
            
             <source src={air} className-="air" type="video/mp4"
             />
             Sorry, your browser doesn't support videos.
           </video>

    </>
  );
}


export default Ram