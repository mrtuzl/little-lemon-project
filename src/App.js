import React from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import metaimg from '../src/Logo.svg';
import './App.css';


function App() {
  return (
      <div className="container"> 
     <meta name="description" content="Little Lemon Restaurant Webpage"/>
     <meta name="og:title" content="Little Lemon Restaurant"/>
     <meta name="og:description" content=""/>
     <meta name="og:image" content={metaimg}/>
     <Nav/>
     <Header/>
     <Main/> 
    <Footer/> 
    </div>
  );
}

export default App;