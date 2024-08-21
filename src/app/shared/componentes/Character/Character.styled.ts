import styled from "styled-components";


//fazendo um componente Character e definindo t tipo dele
export const Character = styled.div<{size: number, left: number, top: number, sidePos: number}>`
height: ${props => props.size}px;
width: ${props => props.size}px;
position: absolute;
left: ${props => props.left}px;
top: ${props => props.top}px;
background-image: url(/assets/char.png);
transform: scale(0.75);
background-position: 0px ${props => props.sidePos}px;

`