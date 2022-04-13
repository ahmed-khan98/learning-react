import './App.css';
import React from 'react';
import About from './component/about';
import Contact from './component/contact';
import Service from './component/service';
import Navbar from './component/navbar';
import Home from './component/Home';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
  
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
