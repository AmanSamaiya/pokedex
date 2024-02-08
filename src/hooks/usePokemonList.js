import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList (){
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
  
   return [pokemonListState ,setPokemonListState]
}

export default usePokemonList;