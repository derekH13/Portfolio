import React from "react";

//style, importa tudo do arquivo como 'C'
import * as C from './Character.styled'

//types
import { LadoPerson } from "../../types/LadoPerson";



type Props = {
    x: number;
    y: number;
    side: LadoPerson;
}



export const Character = ({x, y, side}: Props ) => {
const size = 30

//faz um objeto para que a string que chegue sirva com key desse objeto e tenha o seu valor
const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
}


    return(
        <C.Character size={size} left={ x * size} top={y * size} sidePos={0}>

        </C.Character>
    )
}

