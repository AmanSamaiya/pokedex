import "../PokemonDetailsPage/PokemonDetails.css";
import { Link } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import Pokemon from "../Pokemon/Pokemon";

function PokemonDetails({pokemonName}) {

  
  const [pokemonDetail,pokemonListState] = usePokemonDetails(pokemonName);
  

  return (
    pokemonDetail && (
      <div>

        
        


        <div className="pokemonCard">

        <div>
        <Link to={"/"}>
            <div className="mainPage">
            <h3 className="">Pokedex</h3>
            </div>  
        </Link>
        </div>

          <div>
          <img className="bg-image" src={pokemonDetail.imagebg} alt="" />
          <h1 className="name">{pokemonDetail.name}</h1>
          <img className="image" src={pokemonDetail.image} alt="" />
          <h2>
          Type : {pokemonDetail.type.map(t=><span className="type" key={t.type.name}>{t.type.name}</span>)}
          </h2>
         
          <h3>
             <span className="type">Height : {pokemonDetail.height}</span> 
             <span className="type">Weight : {pokemonDetail.weight}</span>
          </h3>

          </div>
       
           <div className="moves">
            <h3 style={{fontSize:30 , letterSpacing:10 , textDecoration:"underline"}}>Moves</h3>
            {pokemonDetail.moves.map((move)=> <h4 key={move.move.name}>{move.move.name}</h4>)}
          </div>

        </div>

       
          <h2 style={{letterSpacing:10}}>Similar Pokemons</h2>
          <div>

            {pokemonListState.pokemon.length > 0 &&
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
            }


           
          

        </div>

      </div>
    )
  );
}

export default PokemonDetails;
