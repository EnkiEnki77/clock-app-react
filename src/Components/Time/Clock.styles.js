import styled from "styled-components";
import {BsFillSunFill} from 'react-icons/bs'

export const ClockWrap = styled.div` 
    position: absolute;
    max-width: 575px;
    height: 288px;
    left: 165px;
    top: 344px;
    color: #ffffff;
`

export const GreetingWrap = styled.div` 
    display: flex;
    flex-flow: row;
    align-items: center;
`

export const Greeting = styled.h2` 
   font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
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
line-height: 200px;
/* identical to box height, or 100% */
letter-spacing: -5px;

color: #FFFFFF;
margin:0;
`

export const ClockTimeZone = styled.h2` 
    font-family: Inter;
font-style: normal;
font-weight: 300;
font-size: 40px;
line-height: 28px;
/* identical to box height, or 70% */
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
line-height: 28px;
/* identical to box height, or 117% */
letter-spacing: 4.8px;
text-transform: uppercase;

color: #FFFFFF;
`