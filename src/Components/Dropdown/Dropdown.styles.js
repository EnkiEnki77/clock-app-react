import styled from "styled-components";
import {IoIosArrowDropdownCircle} from 'react-icons/io'

export const DropdownContainer = styled.div` 
    max-width: 146px;
    align-self:flex-end;
    margin-left: 389px;
    transform: translateY(-30px);
    
`

export const DropdownButt = styled.div` 

    background: #FFFFFF;
border-radius: 28px;
display: flex;
flex-flow: row nowrap;
align-items: center;
padding: 0px 10px;
cursor:pointer;
`
export const DropdownArrow = styled(IoIosArrowDropdownCircle)` 
font-size: 30px;
margin-left: 5px;
`

export const DropdownText = styled.p` 
    font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 16px;
letter-spacing: 5px;
text-transform: uppercase;
margin-left: 5px;

color: #000000;

mix-blend-mode: normal;
opacity: 0.5;
`

export const DropdownWrap = styled.div` 
min-height: 400px;
background-color: rgba(255,255,255,0.75);
`

export const TimezoneWrap = styled.div` 
order: 1;
`

export const CurrentTimezone = styled.h2` 

`

export const Timezone = styled.p` 

`

export const YearWrapper = styled.div` 

`

export const DayYear = styled.h2` 
order: 3;
`

export const DayYearValue = styled.p` 

`

export const WeekWrapper = styled.div` 
order:2;
`

export const DayWeek = styled.h2` 

`

export const DayWeekValue = styled.p` 

`

export const WeekNumberWrapper = styled.div` 
order: 4;
`

export const WeekNumber = styled.h2` 

`

export const WeekNumberValue = styled.p` 

`