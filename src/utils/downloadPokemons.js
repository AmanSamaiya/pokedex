import axios from "axios";
import { useState } from "react";

async function downloadPokemons(pokemonListState , setPokemonListState , defaultUrl , limit=20) {
  
    const response = await axios.get(pokemonListState.pokemonUrl ? pokemonListState.pokemonUrl : defaultUrl);

    let responseData = response.data.results ? response.data.results : response.data.pokemon;
    responseData = responseData.slice(0,limit)
    const pokemonPromise = responseData.map((p) => {
        if(p.url){
            return axios.get(p.url)
         }
         else if(p.pokemon.url){
            return axios.get(p.pokemon.url)
         }
    }
    );

    const pokemonListData = await axios.all(pokemonPromise);


    const pokemonFinalData = pokemonListData.map((pokemondata) => {
      const pokemon = pokemondata.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types[0].type.name,
      };
    });

    setPokemonListState({...pokemonListState, pokemon:pokemonFinalData, nextUrl:response.data.next, prevUrl:response.data.previous});
  }

  export default downloadPokemons;