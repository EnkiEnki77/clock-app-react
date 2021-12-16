import {React, useState, useEffect} from 'react'
import {GreetingWrap, Greeting, Sun, TimeWrap, Time, ClockTimeZone, Location, ClockWrap} from './Clock.styles'


const Clock = ({time, abbreviation, city, country, state}) => {
    const [greeting, setGreeting] = useState('Good Morning')

    let timeVar = time

    console.log(timeVar)
    
    useEffect(() => {
        if(parseInt(timeVar) >= 5 && parseInt(timeVar) < 12  ){
            console.log('afternoon')
            setGreeting('Good Morning')
           
        }else if(parseInt(timeVar) >= 12 && parseInt(timeVar) < 18  ){
            console.log('afternoon')
            setGreeting('Good Afternoon')
           
        }
        
        else if(parseInt(time) >= 18 ){
            console.log('afternoon')
            setGreeting('Good Evening')
        }
    }, [time, timeVar])
 
    
    return (
        <ClockWrap>
            <GreetingWrap>
                <Sun></Sun>
                <Greeting>{greeting}, it's currently</Greeting>
            </GreetingWrap>
            <TimeWrap>
                <Time>{time}</Time>
                <ClockTimeZone>{abbreviation}</ClockTimeZone>
            </TimeWrap>
            <Location>In {city}, {state}</Location>
        </ClockWrap>
    )
}

export default Clock
