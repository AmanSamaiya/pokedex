import "../Pokedex/Pokedex.css"
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

function Pokedex() {
return(
    <div>
    <h1 className="Pokedex-Heading">Pokedex</h1>
    <Search/>
    <PokemonList/>
    </div>
);
}


export default Pokedex