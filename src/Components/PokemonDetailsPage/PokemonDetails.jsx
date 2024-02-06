import "../PokemonDetailsPage/PokemonDetails.css";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState , useEffect } from "react";

 function PokemonDetails() {

    const [pokemonDetail, setPokemonDetail] = useState(null);

    const { id } = useParams();
    console.log(id);
    const defaultUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;


    async function getDetails(){
        const response = await axios.get(defaultUrl);
        const pokemon = response.data;
        setPokemonDetail({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            type: pokemon.types[0].type.name,
        });

    }

    useEffect(() => {
        getDetails();
      }, []);
    

      return(
       pokemonDetail && <div>
            <h1>{pokemonDetail.name}</h1>
            <h1></h1>
        </div>
    );
 
}




export default PokemonDetails;
