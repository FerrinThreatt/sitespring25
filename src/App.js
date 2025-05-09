import './App.css';
import BrainStorm from './components/BrainStorm.js';
import FirstComponent from './components/FirstComponent.js';
import Title from './components/Title.js';
import { render } from 'react-dom';
import HeroImage from './components/HeroImage.js';
import Gallery from './components/Gallery.js';



function App() {
  return (
    <div className="App">
      <Title/>
   
   
  <BrainStorm/>

      
    
        <FirstComponent/>
    
 
        {/* <HeroImage /> */}
        {/* <Gallery /> */}
  
        <p> im jaiyn im still coding this site, but i need something for that'll satiate the archive </p>
        <p> deploying to production as time goes</p>
        {/* <img src={lick} className="App-logo" alt="logo" /> */}
        {/* This is where all of the componenets will go  */}
      
        <a
          className="App-link"
          href="https://too.fm/8vrnjdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          stream here
        </a>

      


    </div>
  );
}


export default App
