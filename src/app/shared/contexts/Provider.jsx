import { useState } from "react";
import AppContext from "../contexts/AppContext";  // Corrected the import statement
import PropTypes from 'prop-types';  // Corrected 'propTypes' to 'PropTypes'


// This file (Provider) is the component that will provide the information

// This function wraps all child components that we want to have in a context
function Provider({children}) {

    const [PokeDados, setPokeDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [TipoPokemon, setTipoPokemon] = useState([]);
    const [arrayTipo, setArrayTipo] = useState([]);
    const [CardMostrar, setCardMostrar] = useState('');


    // These variables are passed to the Context
    const value = {
        PokeDados, 
        setPokeDados,
        loading,
        setLoading,
        TipoPokemon, 
        setTipoPokemon,
        arrayTipo, 
        setArrayTipo,
        CardMostrar, 
        setCardMostrar,
    };

    return ( 
        // All properties placed in AppContext.Provider can be accessed by all of its children
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

Provider.propTypes = {  // Corrected 'prototypes' to 'propTypes'
    children: PropTypes.any,
}.isRequired;

export default Provider;
