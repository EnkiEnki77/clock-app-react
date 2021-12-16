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
  let quoteText;
  let quoteAuthor;

  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState('text')
  const [background, setBackground] = useState('')

  useEffect(() => {
    let api = "http://worldtimeapi.org/api/ip"
    async function fetchData(){
        await fetch(api)
        .then(response => {return response.json()})
        .then(json => {setData(json);})
      }

        fetchData()

    let api2 = "http://ip-api.com/json/"
    async function fetchData2(){
        await fetch(api2)
        .then(response => {return response.json()})
        .then(json => {setData2(json);})
      }

        fetchData2()
    
        
      

  }, [])

  useEffect(() => {
    let api3 = "https://type.fit/api/quotes"
     function fetchData3(){
        fetch(api3)
        .then(response => {return response.json()})
        .then(json => {setData3(json);})
      }

        fetchData3()
  }, [])

  

  if(data.timezone !== undefined){
   let  timezone = data.timezone;
    timezoneRemove = timezone.replace('_', '');  
    console.log(timezoneRemove)
    let time = data.datetime.slice(11, 16)
    timeSlice = time;
    
    // data.timezone.replace('_', '')
  }

  console.log(quoteText, quoteAuthor)

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

  

  const user = useSelector((state) => state.Dropdown.value)
  return (
    <Container >
        <Global/>
        <BgImg src={background}/>
        <Quote quotes = {data3}/>
        <Flex move = {user.move} className='flex'>
          <Clock abbreviation={data.abbreviation} time = {timeSlice} city = {data2.city} country = {data2.countrycode} state = {data2.region}/>
          <DropdownButt/>
        </Flex>
        <DropdownCont dayWeek = {data.day_of_week} week = {data.week_number} timezone = {timezoneRemove} dayYear = {data.day_of_year}/>
    </Container>
  );
}

export default App;


