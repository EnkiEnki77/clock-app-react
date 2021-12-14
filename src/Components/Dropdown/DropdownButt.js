import {React, useState} from 'react'
import { DropdownButt,  DropdownText, DropdownArrow, DropdownContainer} from './Dropdown.styles'




const Dropdown = () => {
    const [dropdownActive, setDropdownActive] = useState(false)

     function dropDown() {
        setDropdownActive(true)
    }

    return (
        <DropdownContainer>
            <DropdownButt onClick = {dropDown}>
                <DropdownText>More</DropdownText>
                <DropdownArrow/>
            </DropdownButt>
           
        </DropdownContainer>
    )
}

export default Dropdown
