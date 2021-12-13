import React from 'react'
import {GreetingWrap, Greeting, Sun, TimeWrap, Time, ClockTimeZone, Location, ClockWrap} from './Clock.styles'


const Clock = () => {
    return (
        <ClockWrap>
            <GreetingWrap>
                <Sun></Sun>
                <Greeting>Goodmorning</Greeting>
            </GreetingWrap>
            <TimeWrap>
                <Time>11:37</Time>
                <ClockTimeZone>BST</ClockTimeZone>
            </TimeWrap>
            <Location>In London UK</Location>
        </ClockWrap>
    )
}

export default Clock
