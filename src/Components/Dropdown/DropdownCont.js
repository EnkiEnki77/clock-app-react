import React from 'react'
import {DropdownWrap, Line, TimezoneWrap,CurrentTimezone, Timezone, YearWrapper, DayYear, DayYearValue, WeekWrapper, DayWeek, DayWeekValue,WeekNumberWrapper, WeekNumber, WeekNumberValue} from './DropdownCont.styles'
import { useSelector } from 'react-redux'

const DropdownCont = ({dayYear, timezone, week, dayWeek, background, color}) => {
    const user = useSelector((state) => state.Dropdown.value)
    // console.log(dayYear)
    return (
    <DropdownWrap color={color} background={background} trans={user.transition} move={user.move} display ={user.display}  className='unhide'>
        <TimezoneWrap>
            <CurrentTimezone>current timezone</CurrentTimezone>
            <Timezone>{timezone}</Timezone>
        </TimezoneWrap>
        <YearWrapper>
            <DayYear>Day of the Year</DayYear>
            <DayYearValue>{dayYear}</DayYearValue>
        </YearWrapper>
        <Line/>
        <WeekWrapper>
            <DayWeek>Day of the week</DayWeek>
            <DayWeekValue>{dayWeek}</DayWeekValue>
        </WeekWrapper>
        <WeekNumberWrapper>
            <WeekNumber>week number</WeekNumber>
            <WeekNumberValue>{week}</WeekNumberValue>
        </WeekNumberWrapper>
    </DropdownWrap>
    )
}

export default DropdownCont
