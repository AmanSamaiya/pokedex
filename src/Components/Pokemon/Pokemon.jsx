import { Link } from "react-router-dom";
import "../Pokemon/Pokemon.css";

function Pokemon({ name, type, image, id }) {
  return (
    <div className="pokemon-data">
      <Link to={`/${id}`}>
        <div>
          <p>{name}</p>
          <img src={image} alt="" />
          <p>{type}</p>
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
