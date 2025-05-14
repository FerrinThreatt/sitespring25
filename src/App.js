import './App.css';
import BrainStorm from './components/BrainStorm.js';
import FirstComponent from './components/FirstComponent.js';
import Title from './components/Title.js';
import Works from './components/pages/Works';
import Home from './components/pages/Home.js';
import Ram from './components/pages/Ram.js';
import Dates from './components/pages/Dates/Dates.js';
import Dates_1 from './components/pages/Dates/Dates_1.js'
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Title/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ram" element={<Ram />} />
        <Route path="works" element={<Works />} />
        <Route path="dates" element={<Dates />} />
        <Route path="dates_1" element={<Dates_1 />} />

      </Routes>
     
     
  
   
   


      
  
      


    </div>
  );
}


export default App
