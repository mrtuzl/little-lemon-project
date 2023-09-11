import React from 'react';
import Card from './Card.js';


function Specials() {
    return (
        <> 
        <React.Fragment className=""> 
        <h1> Specials </h1>
        <button> Online Menu </button>
        </React.Fragment>

        <React.Fragment className=""> 
            <Card/>
            <Card/>
            <Card/>
        </React.Fragment>

        </>
    );
  }
  
  export default Specials;
  