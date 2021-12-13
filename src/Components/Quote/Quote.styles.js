import styled from "styled-components";
import {HiOutlineRefresh} from 'react-icons/hi'

export const QuoteContainer = styled.div` 
    position: absolute;
    max-width: 573px;
    height: 125px;
    left: 165px;
    top: 30px;
    color: #ffffff;
    display: flex;
    flex-flow: column nowrap;
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
    line-height: 28px;
`

export const Refresh = styled(HiOutlineRefresh)` 
    
    font-size: 30px;
    transform: translateY(-23px);
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
`

export const Writer = styled.h2` 
    font-family: 'Inter', sans-serif;    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
`