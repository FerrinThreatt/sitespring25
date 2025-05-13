import * as React from 'react';
import { Link } from 'react-router-dom';
import BrainStorm from '../BrainStorm.js';
import Title from '../Title.js';
import FirstComponent from '../FirstComponent.js';
;

export default function Home() {
    return (
      <>
    
        <Link to="/works">Works</Link> <span>&nbsp;</span>
   
        <Link to="/ram">  RAM  </Link>
<br></br> <br></br>
        <BrainStorm/>
          <br></br>
        <FirstComponent/>
    
 
        {/* <HeroImage /> */}
        {/* <Gallery /> */}
  
        <p> im jaiyn im still coding this site, but i need something for now that'll satiate the archive </p>
        <p> updates as time goes</p>
        {/* <img src={lick} className="App-logo" alt="logo" /> */}
        {/* This is where all of the componenets will go  */}
      
        <a
          className="App-link"
          href="https://too.fm/oyorpwd"
          target="_blank"
          rel="noopener noreferrer"
        >
          stream here
        </a><span>&nbsp;</span>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=lvy5yEmjL9s&t=2992s"
          target="_blank"
          rel="noopener noreferrer"
        >
         *this link changes from time to time*
        </a>

        <br></br>
        <br></br>

      </>
    );
  }