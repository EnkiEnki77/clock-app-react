import {React, useState} from 'react'
import { DropdownButt,  DropdownText, DropdownArrow, DropdownContainer} from './Dropdown.styles'
import { useDispatch } from 'react-redux'
import {useSelector} from  'react-redux'
import {active, unActive} from '../../Features/Dropdown'




const Dropdown = () => {
    let user = useSelector( (state) => state.Dropdown.value)
    const dispatch = useDispatch()
    const [boolean, setBoolean] = useState(false)

    
    function activation(){
        setBoolean(!boolean)
        if(boolean === true){
        dispatch(unActive({display: 'none', hidden: 'flex', move: 'none',  buttonText: 'More', arrow: 'none'}))}
        else{dispatch(active({display: 'flex', hidden: 'none', move: 'translateY(-105px)', buttonText: 'Less', arrow: 'rotate(180deg)'}))}
    }

    console.log(boolean)


   

    return (
        <DropdownContainer>
            <DropdownButt onClick={activation} >
                <DropdownText>{user.buttonText}</DropdownText>
                <DropdownArrow arrow = {user.arrow}/>
            </DropdownButt>
           
        </DropdownContainer>
    )
}

export default Dropdown
