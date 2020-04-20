import React, { useEffect, useState } from "react"; // importing React, useEffect for axios call and useState hook to set up state 
import axios from "axios";
import styled from 'styled-components';

//styling 
const Div = styled.div` 
font-size:35px;
color:white;
font-weight:200;
font-family:papyrus;
font-style:italic;
`; 

function App () {
  const [characters, setCharacters] = useState([]); // Setting up state
  useEffect(() => {
    const getCallFunction = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log("Error message", error);
        });
    };

    getCallFunction(); // calling our function
  }, []);

 

  return (
    <Div>
      <h2>Characters</h2>
          {characters.map(character => (
          <div key={character.id}> Name: {character.name} Species: {character.species} Status: {character.status} <img src={character.image} alt="char pictures"/>
           
          </div>
        ))}
  
    </Div>
  );
}

export default App;