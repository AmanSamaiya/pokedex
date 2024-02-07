import "../PokemonDetailsPage/PokemonDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PokemonDetails() {
  const [pokemonDetail, setPokemonDetail] = useState(null);

  const { id } = useParams();
  console.log(id);
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

  return (
    pokemonDetail && (
      <div>
        <Link to={"/"}>
            <div className="mainPage">
            <h3 className="">Pokedex</h3>
            </div>
            
        </Link>
        <div className="pokemonCard">
        <img className="bg-image" src={pokemonDetail.imagebg} alt="" />
        <h1 className="name">{pokemonDetail.name}</h1>
        <img className="image" src={pokemonDetail.image} alt="" />
        <h2>
          Type : {pokemonDetail.type.map(t=><span className="type" key={t.type.name}>{t.type.name}</span>)}
         </h2>
        <h3>Height : {pokemonDetail.height}</h3>
        <h3>Weight : {pokemonDetail.weight}</h3>
        </div>
        
      </div>
    )
  );
}

export default PokemonDetails;
