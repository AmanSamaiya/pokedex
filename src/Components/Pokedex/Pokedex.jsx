import { useState } from "react";
import "../Pokedex/Pokedex.css"
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import PokemonDetails from "../PokemonDetailsPage/PokemonDetails";

function Pokedex() {

    const [searchTerm , setSearchTerm] = useState('');
return(
    <div>
    <h1 className="Pokedex-Heading">Pokedex</h1>
    <Search pokemonSearchName={setSearchTerm}/>
    {searchTerm ? <PokemonDetails pokemonName={searchTerm}/> : <PokemonList/>}
    </div>
);
}


export default Pokedex