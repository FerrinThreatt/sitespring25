import * as React from 'react';
import { Link } from 'react-router-dom';
import banana from '../../../banana.jpeg';
import cds from '../../../cds.jpeg';
import moon from '../../../moon.jpeg';
import landscape from '../../../landscape.jpeg';
import fools from '../../../fools.mp4';
import thought from '../../../thought1.png'
import Home from '../Home';
import { Routes, Route } from 'react-router-dom';
import Works from '../Works';
import Ram from '../Ram';

function Dates() {
  return (
    <>
   
    <Link to="/">Home</Link><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
         
   
    <Link to="/works">Works</Link>  <span>&nbsp;</span><span>&nbsp;</span>
    <Link to="/ram">RAM</Link>

    <Routes>
        <Route path="/" />
        <Route path="ram" element={<Ram />} />
        <Route path="Works" element={<Works />} />
      </Routes>
   

    </>
  );
}


export default Dates