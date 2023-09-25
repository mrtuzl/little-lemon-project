import React from 'react'
import Homepage from './Homepage.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import metaimg from '../src/Logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
    <Nav/>
    <Homepage/>
   
      <div className="container"> 
     <meta name="description" content="Little Lemon Restaurant Webpage"/>
     <meta name="og:title" content="Little Lemon Restaurant"/>
     <meta name="og:description" content=""/>
     <meta name="og:image" content={metaimg}/>
    
    
    <Footer/>
    </div>
    </Router>
    
  );
}

export default App;