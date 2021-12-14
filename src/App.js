import {Container, BgImg, Flex} from './Components/AppContainer.style'
import dayImage from './starter-code/assets/desktop/bg-image-daytime.jpg'
import nightImage from './starter-code/assets/desktop/bg-image-nighttime.jpg'
import {Global} from './Global.style'
import Quote from './Components/Quote/Quote';
import Clock from './Components/Time/Clock'
import DropdownButt from './Components/Dropdown/DropdownButt'
import DropdownCont from './Components/Dropdown/DropdownCont'




function App() {
  return (
    <Container >
        <Global/>
        <BgImg src={dayImage}/>
        <Quote/>
        <Flex>
          <Clock/>
          <DropdownButt/>
        </Flex>
        <DropdownCont/>
    </Container>
  );
}

export default App;


