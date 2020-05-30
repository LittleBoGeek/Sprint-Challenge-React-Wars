import {useState, useEffect} from 'react';
import React from 'react'
import './App.css';
import Characters from './components/Characters'
import axios from 'axios';
import styled from 'styled-components'

const ColorChange = styled.h1`
text-align:center;
color:white;
  margin: 0;
  font-family:Bangers, cursive;
  font-size: 75px;
  animation-name: animate;
  animation-duration: 10s;
  animation-direction: alternate;
  animation-iteration-count: infinite;            
  padding:40px;
  line-height:1.5;
  letter-spacing:7px;


}
@keyframes animate {
  0%,100%{ text-shadow:0 0 30px red; }
  25%{ text-shadow:0 0 30px orange; }
  50%{ text-shadow:0 0 30px forestgreen; }
  75%{ text-shadow:0 0 30px cyan; }
}
`  
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [data, setData] = useState([]);

useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(res =>{ 
   setData(res.data.results); 
  //  console.log(res.data.results) Doesn't Log
 
  } )

  .catch(err =>{
    console.log("Error:", err);
  });
})

  return (
    <div className="App">
     <h1 className="Header"> <ColorChange>  React Wars </ColorChange>  </h1> 


{data.map(chara => (
  <Characters key={chara.id} name={chara.name} species={chara.species}  stats={chara.status} image={chara.image}/>
))}
     
    </div>
  );
}

export default App;


// Characters component for displaying characters 