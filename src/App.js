import {Container, BgImg} from './Components/AppContainer.style'
import dayImage from './starter-code/assets/desktop/bg-image-daytime.jpg'
import nightImage from './starter-code/assets/desktop/bg-image-nighttime.jpg'
import {Global} from './Global.style'
import Quote from './Components/Quote/Quote';
import Clock from './Components/Time/Clock'
import Dropdown from './Components/Dropdown/Dropdown'




function App() {
  return (
    <Container >
        <Global/>
        <BgImg src={dayImage}/>
        <Quote/>
        <Clock/>
        <Dropdown/>
    </Container>
  );
}

export default App;


