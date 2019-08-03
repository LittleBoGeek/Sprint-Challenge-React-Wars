import React from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  axios.get("'http https://swapi.co/api/people/1/'").then( response => {
    console.log("success!", response)
  })
  .catch( err =>{
    console.log("error:", err)
  
  })
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return ( 
 <div className="App">
      <h1 className="Header">React Wars</h1>
     
    </div> 
  );
}



export default App;
/*https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js */