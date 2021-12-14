import React from 'react'
import {DropdownWrap, TimezoneWrap,CurrentTimezone, Timezone, YearWrapper, DayYear, DayYearValue, WeekWrapper, DayWeek, DayWeekValue,WeekNumberWrapper, WeekNumber, WeekNumberValue} from './DropdownCont.styles'

const DropdownCont = () => {
    return (
        <DropdownWrap>
        <TimezoneWrap>
            <CurrentTimezone>current timezone</CurrentTimezone>
            <Timezone>Europe/London</Timezone>
        </TimezoneWrap>
        <YearWrapper>
            <DayYear>Day of the Year</DayYear>
            <DayYearValue>295</DayYearValue>
        </YearWrapper>
        <WeekWrapper>
            <DayWeek>Day of the week</DayWeek>
            <DayWeekValue>5</DayWeekValue>
        </WeekWrapper>
        <WeekNumberWrapper>
            <WeekNumber>week number</WeekNumber>
            <WeekNumberValue>42</WeekNumberValue>
        </WeekNumberWrapper>
    </DropdownWrap>
    )
}

export default DropdownCont
