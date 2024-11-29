import arrow from "../images/arrow-left-solid.svg";
import { Link } from "react-router-dom";
function CharacterDetail({ characterItem }) {
  console.log(characterItem);
  return (
    <section className="card">
      <Link className="back" to={`/`}>
        Volver
      </Link>
      <div className="detail">
        <img src={characterItem.photo} alt={characterItem.name} />
        <h4>{characterItem.name}</h4>
        <p>{characterItem.species}</p>
        <p>{characterItem.planet}</p>
        <p>{characterItem.episodes}</p>
        <p>{characterItem.status}</p>
      </div>
    </section>
  );
}

export default CharacterDetail;
