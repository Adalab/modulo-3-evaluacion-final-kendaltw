import CharacterCard from "./CharacterCard";
import pickle from "../images/picke-rick.png";

function CharacterList({ characters, message }) {
  const characterElements = characters.map((character) => {
    return <CharacterCard key={character.id} characters={character} />;
  });
  return (
    <section className="list-title">
      <div className="list-pickle">
        <h3>Lista de personajes</h3>
        <img src={pickle} alt="pickle rick" />
      </div>
      <h4>{message}</h4>
      <ul className="list">{characterElements}</ul>;
    </section>
  );
}

export default CharacterList;
