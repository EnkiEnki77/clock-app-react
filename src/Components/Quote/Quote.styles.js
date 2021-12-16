import styled from "styled-components";
import {FiRefreshCw} from 'react-icons/fi'

export const QuoteContainer = styled.div.attrs(props => ({
    hidden: props.hidden,
    trans: props.trans
}))` 
    max-width: 573px;
    color: #ffffff;
    display: ${props => props.hidden};
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-left: 165px;
    min-height: 177px;
    margin-top:36px;
    transition: 0.2s all ease-in-out;
`

export const QuoteWrap = styled.div` 
    display: flex;
    flex-flow: column nowrap;
    /* min-height: 126px; */
    /* align-items: center; */
    
    /* padding-right: 20px */

`

export const QuoteP = styled.p` 
   
    font-family: 'Inter', sans-serif;    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    align-self: flex-start;
    /* min-height: 90px; */
    /* max-width: 400px; */
`

export const Refresh = styled(FiRefreshCw)` 
    
    font-size: 30px;
    /* transform: translateY(-25px); */
    color: #ffffff;
    font-size: 40px;
    mix-blend-mode: normal;
    opacity: 0.6;
    cursor: pointer;
    min-height: 40px;
    max-width: 19px;
    margin-left: 20px;
    margin-top: 15px;
`

export const Writer = styled.h2` 
    font-family: 'Inter', sans-serif;    font-style: normal;
    font-weight: bold;
    font-size: 18px;
`