import React, {useState, useEffect} from "react";
import axios from 'axios'
import styled from 'styled-components';

const WrapperDiv = styled.div`
font-family: 'Lobster', cursive;
font-size:25px;
color:white;
border:5px solid white;
text-align:center;


`;



function App () { 
  const [data, setData] = useState();
 


   useEffect(() => {
    axios 
    .get('https://swapi.co/api/people')
    .then(res => setData (res.data))
   
    .catch(err => console.log(err))
   }, [ ])
  

if(!data) return <div> Loading...</div>
//console.log("this is data", data.results[0].name); // evals to Luke Skywalker


let newData = data.results;

console.log(newData[0].name) // success: also evaluates to Luke Skywalker


return (
 
    <WrapperDiv>
{newData.map((props,index )=> <h1 key={props.name + "-" + index}>Name: {props.name} </h1>)} 
{newData.map((props, index) => <h1 key={props.height + "-" + index}> Height: {props.height} </h1>)} 
{newData.map((props, index) => <h1 key={props.mass + "-" + index}> Mass: {props.mass} </h1>)}

    </WrapperDiv>
  );} 




export default App;
//<FirstComponent name={data.name} tall={data.height} mass={data.mass} skin={data.skin_color} eyes={data.eye_color} birthday={data.birth_year}  sex={data.gender} home={data.homeworld} films={data.films}  />

