import styled from "styled-components";

export const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    margin:0; 
    padding: 0;
    background: rgba(0,0,0, 0.3);
`

export const BgImg = styled.img` 
    width: 100vw;
    height: 100vh;
    z-index:-1;
    position: absolute;
    object-fit: cover;
    object-position: -1px;
    margin: 0;
    padding: 0;
`

export const Flex = styled.div.attrs(props => ({
    move: props.move
}))` 
    display: flex;
    flex-flow: row nowrap;
    margin-left: 165px;
    margin-top: 113px;
    transform: ${props => props.move }
 
`