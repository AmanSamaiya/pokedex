import "../PokemonDetailsPage/PokemonDetails.css";
import { Link, useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails() {

  const { id } = useParams();
  const [pokemonDetail] = usePokemonDetails(id);

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
