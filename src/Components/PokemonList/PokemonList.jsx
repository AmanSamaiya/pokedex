import "../PokemonList/PokemonList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon.jsx";

function PokemonList() {
  const defaultUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonListState, setPokemonListState] = useState({
    pokemon : [],
    pokemonUrl : defaultUrl,
    nextUrl : defaultUrl,
    prevUrl : defaultUrl
  });

  async function pokemonData() {
    const response = await axios.get(pokemonListState.pokemonUrl ? pokemonListState.pokemonUrl : defaultUrl);
    const responseData = response.data.results;

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

    setPokemonListState({...pokemonListState, pokemon:pokemonFinalData, nextUrl:response.data.next, prevUrl:response.data.previous});
  }

  useEffect(() => {
    pokemonData();
  }, [pokemonListState.pokemonUrl]);

 
  return (
    <>
      <h1 style={{letterSpacing:8}}>Pokemon List</h1>
      <div className="search-btn">
        <button onClick={() =>  setPokemonListState({...pokemonListState , pokemonUrl:pokemonListState.prevUrl})} className="btn">
          Previous
        </button>
        <button onClick={() => setPokemonListState({...pokemonListState , pokemonUrl:pokemonListState.nextUrl})} className="btn">
          Next
        </button>
      </div>
      <div className="pokemon-card">
        {pokemonListState.pokemon.map((poke) => (
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
