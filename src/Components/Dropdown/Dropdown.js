import React from 'react'
import { DropdownButt, DropdownWrap, TimezoneWrap,CurrentTimezone, Timezone, YearWrapper, DayYear, DayYearValue, WeekWrapper, DayWeek, DayWeekValue,WeekNumberWrapper, WeekNumber, WeekNumberValue, DropdownText, DropdownArrow, DropdownContainer} from './Dropdown.styles'



const Dropdown = () => {
    return (
        <DropdownContainer>
            <DropdownButt>
                <DropdownText>More</DropdownText>
                <DropdownArrow/>
            </DropdownButt>
            <DropdownWrap>
                <TimezoneWrap>
                    <CurrentTimezone></CurrentTimezone>
                    <Timezone></Timezone>
                </TimezoneWrap>
                <YearWrapper>
                    <DayYear></DayYear>
                    <DayYearValue></DayYearValue>
                </YearWrapper>
                <WeekWrapper>
                    <DayWeek></DayWeek>
                    <DayWeekValue></DayWeekValue>
                </WeekWrapper>
                <WeekNumberWrapper>
                    <WeekNumber></WeekNumber>
                    <WeekNumberValue></WeekNumberValue>
                </WeekNumberWrapper>
            </DropdownWrap>
        </DropdownContainer>
    )
}

export default Dropdown
