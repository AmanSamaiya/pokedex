import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './Components/Pokedex/Pokedex';
import PokemonDetails from "./Components/PokemonDetailsPage/PokemonDetails.jsx"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<Pokedex/>}/>
        <Route path = "/:id" element={<PokemonDetails/>}/>
        <Route path = "*" element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
