import * as React from 'react';
import { Link } from 'react-router-dom';
import notes  from '../../notes.PNG';
import tea from '../../tea.jpeg';
import air from '../../air.mp4';
import snake from '../../snake.jpeg';


function Ram() {
  return (
    <>
      <Link to="/">Home</Link><span>&nbsp;</span><span>&nbsp;</span>
      <Link to="/works">Works </Link>
   

      <br></br><br></br>
       
        <Link to="/dates">  ✮⋆˙05.12.25 - 05.13.25 ̤̮ </Link> <br></br><br></br>

        <Link to="/dates_1">  ✮⋆˙05.13.25 - 05.14.25 ̤̮ </Link> <br></br><br></br>
        <Link to="/stats">  stats </Link>
       <br></br><br></br>
              <img src={notes} className="notes" alt="logo" />  <span>&nbsp;</span><span>&nbsp;</span>
              <img src={tea} className="tea" alt="logo" />  <span>&nbsp;</span><span>&nbsp;</span>
       
         <video controls width="67%" className="air" poster="placeholder.png">
            
             <source src={air} className-="air" type="video/mp4"
             />
             Sorry, your browser doesn't support videos.
           </video><span>&nbsp;</span><span>&nbsp;</span>
       

 <img src={snake} className="snake" alt="logo" />  <span>&nbsp;</span><span>&nbsp;</span>
    </>
  );
}


export default Ram