import {React, useState, useEffect} from 'react'
import {GreetingWrap, Greeting, Sun, Moon, TimeWrap, Time, ClockTimeZone, Location, ClockWrap} from './Clock.styles'
import {icon} from '../../Features/Clock'
import { useSelector, useDispatch} from 'react-redux'


const Clock = ({time, abbreviation, city, country, state}) => {
    const [greeting, setGreeting] = useState('Good Morning')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.time.value)

    let timeVar = time

    console.log(user)
    
    useEffect(() => {
        if(parseInt(timeVar) >= 5 && parseInt(timeVar) < 12  ){
            console.log('afternoon')
            setGreeting('Good Morning')
            dispatch(icon({sun:'block', moon: 'none'}))
           
        }else if(parseInt(timeVar) >= 12 && parseInt(timeVar) < 18  ){
            console.log('afternoon')
            setGreeting('Good Afternoon')
           
        }
        
        else if(parseInt(time) >= 18 ){
            console.log('afternoon')
            setGreeting('Good Evening')
            dispatch(icon({sun:'none', moon: 'block'}))
        }
    }, [time, timeVar, dispatch])
 
    
    return (
        <ClockWrap>
            <GreetingWrap>
                <Sun display={user.sun}/>
                <Moon display = {user.moon}/>
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
