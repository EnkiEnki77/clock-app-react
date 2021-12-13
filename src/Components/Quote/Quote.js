import React from 'react'
import {QuoteWrap, QuoteP, Writer, QuoteContainer, Refresh} from './Quote.styles'


const Quote = () => {
    return (
        <QuoteContainer>
            <QuoteWrap>
                <QuoteP>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</QuoteP>
                <Refresh></Refresh>
            </QuoteWrap>
            <Writer>Ada Lovelace</Writer>
        </QuoteContainer>
    )
}

export default Quote
