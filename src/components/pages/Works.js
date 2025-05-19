import * as React from 'react';
import { Link } from 'react-router-dom';



import Home from './Home.js';
import Ram from './Ram.js';
import Dates from './Dates/Dates.js';
import Title from '../Title.js';

import { Routes, Route } from 'react-router-dom';

import sfpcscan1 from '../../scan1sfpc.jpeg';
import sfpcscan2 from '../../scan2sfpc.jpeg';

import jaiynvideo from '../../JAIYN451DegreeShortTermFix.mp4';
import FirstComponent from '../FirstComponent.js';

function Works() {
  return (
    <>

         
         <Link to="/">  Home  </Link><span>&nbsp;</span>
         <Link to="/ram">RAM</Link> 
         <br></br>
     <Routes>
        <Route path="/" />
        <Route path="ram" element={<Ram />} />
        <Route path="dates" element={<Dates />} />
      </Routes>

        
    <br></br>
    <FirstComponent/>
    <br></br>
        <img src={sfpcscan1} className="sfpc" alt="logo" />  
        <img src={sfpcscan2} className="sfpc" alt="logo" />
        <br></br>
    <video controls width="70%" poster="placeholder.png">
     
      <source src={jaiynvideo} type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
  
    </>
  );
}


export default Works