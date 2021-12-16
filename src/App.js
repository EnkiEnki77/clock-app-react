import {Container, BgImg, Flex} from './Components/AppContainer.style'
import dayImage from './starter-code/assets/desktop/bg-image-daytime.jpg'
import nightImage from './starter-code/assets/desktop/bg-image-nighttime.jpg'
import {Global} from './Global.style'
import Quote from './Components/Quote/Quote';
import Clock from './Components/Time/Clock'
import DropdownButt from './Components/Dropdown/DropdownButt'
import DropdownCont from './Components/Dropdown/DropdownCont'
import {useSelector} from 'react-redux'
import {useEffect, useState}  from 'react'





function App() {
  let timezoneRemove;
  let timeSlice;
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [background, setBackground] = useState('')

  useEffect(() => {
    let api = "http://worldtimeapi.org/api/ip"
    async function fetchData(){
        await fetch(api)
        .then(response => {return response.json()})
        .then(json => {setData(json);})
      }

        fetchData()

  }, [])

  useEffect(() => {
    let api = "http://ip-api.com/json/"
    async function fetchData(){
        await fetch(api)
        .then(response => {return response.json()})
        .then(json => {setData2(json);})
      }

        fetchData()

  }, [])

  if(data.timezone !== undefined){
   let  timezone = data.timezone;
    timezoneRemove = timezone.replace('_', '');  
    console.log(timezoneRemove)
    let time = data.datetime.slice(11, 16)
    timeSlice = time;
    // data.timezone.replace('_', '')
  }

  useEffect(() => {
    if(parseInt(timeSlice) >= 5 && parseInt(timeSlice) < 18  ){
        console.log('afternoon')
        setBackground(dayImage) 
    }else if(parseInt(timeSlice) >= 18 ){
      console.log('afternoon')
      setBackground(nightImage) 
  }
}, [timeSlice])

  // let yes = timezoneRemove

  
console.log(data2)
  

  const user = useSelector((state) => state.Dropdown.value)
  return (
    <Container >
        <Global/>
        <BgImg src={background}/>
        <Quote/>
        <Flex move = {user.move} className='flex'>
          <Clock abbreviation={data.abbreviation} time = {timeSlice} city = {data2.city} country = {data2.countrycode} state = {data2.region}/>
          <DropdownButt/>
        </Flex>
        <DropdownCont dayWeek = {data.day_of_week} week = {data.week_number} timezone = {timezoneRemove} dayYear = {data.day_of_year}/>
    </Container>
  );
}

export default App;


