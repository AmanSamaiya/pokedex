import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

function usePokemonList (defaultUrl){
    const [pokemonListState, setPokemonListState] = useState({
      pokemon : [],
      pokemonUrl : defaultUrl,
      nextUrl : defaultUrl,
      prevUrl : defaultUrl
    });
  

    useEffect(() => {
      downloadPokemons(pokemonListState , setPokemonListState , defaultUrl);
    }, [pokemonListState.pokemonUrl]);
  
   return [pokemonListState ,setPokemonListState]
}

export default usePokemonList;