import * as React from 'react';
import { Link } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import Works from './Works';
import Ram from './Ram';

function Stats() {
  return (
    <>
   
    <Link to="/">Home</Link><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
         
    <Link to="/ram">RAM</Link> <span>&nbsp;</span><span>&nbsp;</span>
    <Link to="/works">Works</Link>

    <Routes>
        <Route path="/" />
        <Route path="ram" element={<Ram />} />
        <Route path="Works" element={<Works />} />
      </Routes>
    
        <br></br><br></br>

     <p>⋆˚꩜｡˚꩜｡˚꩜｡api stuff˚꩜｡˚꩜｡˚꩜｡</p>

    </>
  );
}


export default Stats