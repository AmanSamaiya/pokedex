import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails (id){
    const [pokemonDetail, setPokemonDetail] = useState(null);

   
    const defaultUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
    async function getDetails() {
      const response = await axios.get(defaultUrl);
      const pokemon = response.data;
      setPokemonDetail({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        imagebg: pokemon.sprites.other.home.front_default,
        type: pokemon.types,
        height: pokemon.height,
        weight: pokemon.weight,
      });
    }
  
    useEffect(() => {
      getDetails();
    }, []);

    return [pokemonDetail];
}

export default usePokemonDetails;