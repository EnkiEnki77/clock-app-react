import React from 'react'
import {QuoteWrap, QuoteP, Writer, QuoteContainer, Refresh} from './Quote.styles'
import { useSelector } from 'react-redux'

const Quote = () => {
    const user = useSelector((state) => state.Dropdown.value)
    return (
        <QuoteContainer trans = {user.transition} hidden = {user.hidden} className='hide'>
            <QuoteWrap>
                <QuoteP>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</QuoteP>
                <Refresh></Refresh>
            </QuoteWrap>
            <Writer>Ada Lovelace</Writer>
        </QuoteContainer>
    )
}

export default Quote
