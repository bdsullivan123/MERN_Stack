import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosPokemon = props => {
    const [pokemonData, setPokemonData] = useState([]);

    const onClick = (e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(result =>{
            setPokemonData(result.data.results);
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <button onClick={onClick}>Fetch Pokemon</button>
            {pokemonData.map((pokemon, i) =>
                <p key={i}>{pokemon.name}</p>
            )}
        </div>
    )
}

export default AxiosPokemon
