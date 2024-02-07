import "../Search/Search.css";

function Search() {

  return (
    <div>
      <input type="text" placeholder="Enter the Pokemon name" />  
      <button className="search-button" type="submit">Search</button>    
    </div>
  );
}

export default Search;
