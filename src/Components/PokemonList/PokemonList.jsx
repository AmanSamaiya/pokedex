import "../PokemonList/PokemonList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon.jsx";

function PokemonList() {
  const defaultUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState([]);
  const [pokemonUrl, setPokemonUrl] = useState(defaultUrl);
  const [nextUrl, setNextUrl] = useState(defaultUrl);
  const [prevUrl, setPrevUrl] = useState(defaultUrl);

  async function pokemonData() {
    const response = await axios.get(pokemonUrl ? pokemonUrl : defaultUrl);
    const responseData = response.data.results;
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    const pokemonPromise = responseData.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const pokemonListData = await axios.all(pokemonPromise);

    const pokemonFinalData = pokemonListData.map((pokemondata) => {
      const pokemon = pokemondata.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types[0].type.name,
      };
    });

    setPokemon(pokemonFinalData);
  }

  useEffect(() => {
    pokemonData();
  }, [pokemonUrl]);

 
  return (
    <>
      <h1>Pokemon List</h1>
      <div className="search-btn">
        <button onClick={() => setPokemonUrl(prevUrl)} className="btn">
          Previous
        </button>
        <button onClick={() => setPokemonUrl(nextUrl)} className="btn">
          Next
        </button>
      </div>
      <div className="pokemon-card">
        {pokemon.map((poke) => (
          <Pokemon
            name={poke.name}
            key={poke.id}
            id={poke.id}
            image={poke.image}
            type={poke.type}
          />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
