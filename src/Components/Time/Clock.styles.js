import styled from "styled-components";
import {BsFillSunFill} from 'react-icons/bs'

export const ClockWrap = styled.div` 
    max-width: 100%;
    color: #ffffff;
    display: flex;
    flex-flow: column wrap;
`

export const GreetingWrap = styled.div` 
    display: flex;
    flex-flow: row;
    align-items: center;
    transform: translateY(20px);
`

export const Greeting = styled.h2` 
   font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 4px;
    text-transform: uppercase;

    color: #FFFFFF;
    margin-left:10px;

`

export const Sun = styled(BsFillSunFill)` 
    font-size:22px;
`

export const TimeWrap = styled.div` 
display: flex;
`

export const Time = styled.h1` 
    font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 200px;
letter-spacing: 5px;

color: #FFFFFF;
margin:0;
`

export const ClockTimeZone = styled.h2` 
    font-family: Inter;
font-style: normal;
font-weight: 300;
font-size: 40px;
text-transform: uppercase;
margin-left: 10px;
align-self: flex-end;
color: #FFFFFF;
`

export const Location = styled.h2` 
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 24px;

letter-spacing: 4.8px;
text-transform: uppercase;
transform: translateY(-20px);

color: #FFFFFF;
`