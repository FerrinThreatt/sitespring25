import * as React from 'react';
import { Link } from 'react-router-dom';
import notes  from '../../notes.PNG';



function Ram() {
  return (
    <>
      <Link to="/">Home</Link><span>&nbsp;</span><span>&nbsp;</span>
      <Link to="/works">Works </Link>
   

      <br></br><br></br>
       
        <Link to="/dates">  ✮⋆˙05.12.25 - 05.13.25 ̤̮ </Link> <br></br><br></br>

        <Link to="/dates_1">  ✮⋆˙05.13.25 - 05.14.25 ̤̮ </Link>
       <br></br><br></br>
              <img src={notes} className="notes" alt="logo" />  
   
       

    </>
  );
}


export default Ram