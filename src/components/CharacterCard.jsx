import { Link } from "react-router-dom";

function CharacterCard({ characters }) {
  return (
    <li>
      <Link className="link" to={`/character/${characters.id}`}>
        <img src={characters.photo} alt={characters.name} />
        <h4>{characters.name}</h4>
        <p>{characters.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
