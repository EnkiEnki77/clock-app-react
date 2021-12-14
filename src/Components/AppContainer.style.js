import styled from "styled-components";

export const Container = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin:0; 
    padding: 0;
    background: rgba(0,0,0, 0.4);
`

export const BgImg = styled.img` 
    width: 100%;
    height: 100%;
    z-index:-2;
    position: absolute;
`

export const Flex = styled.div` 
    display: flex;
    flex-flow: row nowrap;
    margin-left: 165px;
    margin-top: 133px;
    margin-bottom: 42px;
`