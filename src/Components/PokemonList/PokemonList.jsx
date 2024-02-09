import "../PokemonList/PokemonList.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import usePokemonList from "../../hooks/usePokemonList.js";

function PokemonList() {
  
  const defaultUrl = "https://pokeapi.co/api/v2/pokemon";

   const [pokemonListState , setPokemonListState ] = usePokemonList(defaultUrl);
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
