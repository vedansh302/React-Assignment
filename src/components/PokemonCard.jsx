import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      {pokemonData ? (
        <>
          <img
            src={pokemonData.sprites.front_default}
            alt={name}
            className="w-20 h-20 mx-auto mb-2"
          />
          <h2 className="text-xl font-semibold capitalize">{name}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonCard;
