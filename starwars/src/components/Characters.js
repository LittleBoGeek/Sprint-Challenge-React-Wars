import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
border:2px solid black;
background-color:rgba(255,255,255,.4);
padding:15px;
margin:25px;
display:inline-block;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
border-radius:7px;

`
const Title = styled.h1`
font-family: 'Bebas Neue', cursive;
color:black;
letter-spacing:6px;
padding:20px;
background-color:rgba(0, 0, 255, .2);
border-radius:7px;
`

const SmallFont = styled.h2`
font-size:20px;
font-weight:300;`

const TeamGreen = styled.span`
color:green;`
const TeamRed = styled.span`
color:red;`





const Characters = (props) => {
    return (
        <Div>

<Title> {props.name}</Title>
<img src={props.image} alt="character pic" />
<SmallFont> species: {props.species} </SmallFont> 

{props.stats == "Alive" ?  <span> Status: <TeamGreen>{props.stats} </TeamGreen> </span>: <span>Status:<TeamRed> {props.stats} </TeamRed> </span>}

        </Div>
    )
}


export default Characters

// {gameQuarter >= 5 ? setGameQuarter(1) : console.log("keep going")}