import {React, useState, useEffect} from 'react'
import {QuoteWrap, QuoteP, Writer, QuoteContainer, Refresh} from './Quote.styles'
import { useSelector } from 'react-redux'

const Quote = ({quotes}) => {
    const user = useSelector((state) => state.Dropdown.value)
    const [quote, setQuote] = useState('')

    function randomQuote(){
        
        
      setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        return () => {
            
        }
    }, [quotes])
    return (
        <QuoteContainer trans = {user.transition} hidden = {user.hidden} className='hide'>
            <QuoteWrap>
                <QuoteP>{quote.text}</QuoteP>
                <Writer>{quote.author}</Writer>
            </QuoteWrap>
            <Refresh onClick = {randomQuote}></Refresh>
            
        </QuoteContainer>
    )
}

export default Quote
