import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

function usePokemonDetails (id){

  const POKEMON_DETAIL_URL = "https://pokeapi.co/api/v2/pokemon/";

    const [pokemonDetail, setPokemonDetail] = useState(null);

    const [pokemonListState, setPokemonListState] = useState({
      pokemon : [],
      pokemonUrl : '',
      nextUrl : '',
      prevUrl : '',
    });
  

   
    async function getDetailsofOnePokemon(id) {
      const response = await axios.get(POKEMON_DETAIL_URL + id);
      const pokemon = response.data;
      setPokemonDetail({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        imagebg: pokemon.sprites.other.home.front_default,
        type: pokemon.types,
        height: pokemon.height,
        weight: pokemon.weight,
        moves : pokemon.moves
      });
      const types = pokemon.types.map((t)=> t.type.name);
      return types[0];
    }

    async function downloadPokemonandRelated(id){
       const type = await getDetailsofOnePokemon(id);
        
        await downloadPokemons(pokemonListState , setPokemonListState , `https://pokeapi.co/api/v2/type/${type}`);
    }
  
    useEffect(() => {
      downloadPokemonandRelated(id);
      window.scrollTo({top:0,left:0, behavior:"smooth"})
    }, [id]);

    return [pokemonDetail , pokemonListState];
}

export default usePokemonDetails;