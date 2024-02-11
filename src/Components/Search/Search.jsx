import useDebounce from "../../hooks/useDebounce";
import "../Search/Search.css";

function Search({pokemonSearchName}) {
  const debounceTerm = useDebounce((e)=> pokemonSearchName(e.target.value))
  return (
    <div>
      <input onChange={debounceTerm} type="text" placeholder="Enter the Pokemon name" />  
      {/* <button className="search-button" type="submit">Search</button>     */}
    </div>
  );
}

export default Search;
