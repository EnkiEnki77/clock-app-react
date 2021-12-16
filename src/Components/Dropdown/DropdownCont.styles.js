import styled from "styled-components";

export const DropdownWrap = styled.div.attrs(props => ({
    display: props.display,
    move: props.move,
    background: props.background,
    color: props.color
}))` 
    /* display: flex; */
    flex-flow: row wrap;
    align-items: center;
    /* background-color: white; */
    color: ${props => props.color};
    min-height:335px;
    margin-top: 10px;
    padding-left:165px;
    background-color: ${props => props.background};
    backdrop-filter: blur(10.7742px);
    display: ${props => props.display};
    transition: 0.2s all ease-in-out;
    transform: ${props => props.move};
`


export const TimezoneWrap = styled.div` 
    flex-basis: 50%;
    
`

export const CurrentTimezone = styled.h2` 
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 15px;
letter-spacing: 3px;
text-transform: uppercase;
`

export const Timezone = styled.p` 
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 56px;
margin: 0;

`

export const YearWrapper = styled.div` 
    margin-left: 50px;
`

export const DayYear = styled.h2` 
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 15px;
letter-spacing: 3px;
text-transform: uppercase;
`

export const DayYearValue = styled.p` 
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 56px;
margin: 0;

`

export const WeekWrapper = styled.div` 
flex-basis: 50%;
`

export const DayWeek = styled.h2` 
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 15px;
letter-spacing: 3px;
text-transform: uppercase;
`

export const DayWeekValue = styled.p` 
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 56px;
margin: 0;

`

export const WeekNumberWrapper = styled.div` 
 margin-left: 50px;
`

export const WeekNumber = styled.h2` 
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 15px;
letter-spacing: 3px;
text-transform: uppercase;
`

export const WeekNumberValue = styled.p` 
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 56px;
margin: 0;
`

export const Line = styled.div` 
     border-left: 2px solid #303030 ;
  height: 252px;
  position: absolute;
  left: 52%;
  margin-left: -3px;
  top: 13%;
mix-blend-mode: normal;
opacity: 0.2;
margin-right:100px
`

