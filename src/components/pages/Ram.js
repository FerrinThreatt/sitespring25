import * as React from 'react';
import { Link } from 'react-router-dom';
import notes  from '../../notes.PNG';
import tea from '../../tea.jpeg';
import air from '../../air.mp4';
import snake from '../../snake.jpeg';
import drowsy112426vid from '../../drowsy112426vid.mp4';

function Ram() {
  return (
    <>
      <Link to="/">Home</Link><span>&nbsp;</span><span>&nbsp;</span>
      <Link to="/works">Works </Link>
   

      <br></br><br></br>
       
        <Link to="/dates">  ✮⋆˙may 25✮ ̤̮ </Link> <br></br><br></br>

        <Link to="/dates_1">  ✮⋆˙june 25 ̤̮ </Link> <br></br><br></br>
        <Link to="/stats">  stats </Link>
       <br></br><br></br>
              <img src={notes} className="notes" alt="logo" />  <span>&nbsp;</span><span>&nbsp;</span>
              <img src={tea} className="tea" alt="logo" /> 
       
         <video controls width="37%" className="air" poster="placeholder.png">
            
             <source src={air} type="video/mp4"
             />
             Sorry, your browser doesn't support videos.
           </video><span>&nbsp;</span><span>&nbsp;</span>
       

 <img src={snake} className="snake" alt="logo" />  <span>&nbsp;</span><span>&nbsp;</span>

 <video controls width="37%" className="air" poster="placeholder.png">
            
             <source src={drowsy112426vid} type="video/mp4"
             />
             Sorry, your browser doesn't support videos.
           </video><span>&nbsp;</span><span>&nbsp;</span>

 
    </>
  );
}


export default Ram