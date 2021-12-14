import styled from "styled-components";
import {FiRefreshCw} from 'react-icons/fi'

export const QuoteContainer = styled.div` 
    max-width: 573px;
    color: #ffffff;
    display: flex;
    flex-flow: column nowrap;
    margin-left: 165px;
    margin-top:26px;
`

export const QuoteWrap = styled.div` 
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`

export const QuoteP = styled.p` 
   
    font-family: 'Inter', sans-serif;    font-style: normal;
    font-weight: normal;
    font-size: 18px;
`

export const Refresh = styled(FiRefreshCw)` 
    
    font-size: 30px;
    transform: translateY(-18px);
    color: #ffffff;
    font-size: 40px;
    mix-blend-mode: normal;
    opacity: 0.6;
    cursor: pointer;
`

export const Writer = styled.h2` 
    font-family: 'Inter', sans-serif;    font-style: normal;
    font-weight: bold;
    font-size: 18px;
`