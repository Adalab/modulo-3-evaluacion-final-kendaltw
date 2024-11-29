import CharacterCard from "./CharacterCard";
import pickle from "../images/picke-rick.png";
import warning from "../images/warning.png";

function CharacterList({ characters, message, name }) {
  const characterElements = characters.map((character) => {
    return <CharacterCard key={character.id} characters={character} />;
  });
  return (
    <section className="list-title">
      <div className="list-pickle">
        <h3>Lista de personajes</h3>
        <img src={pickle} alt="pickle rick" />
      </div>
      {message && (
        <>
          <img src={warning} alt="warning" style={{ width: "20px" }} />
          <p>
            No hemos encontrado a ${name} en ninguno de los universos paralelos
          </p>
          <img src={warning} alt="warning" style={{ width: "20px" }} />
        </>
      )}
      <ul className="list">{characterElements}</ul>;
    </section>
  );
}
// <img src={warning} alt="warning" style={{ width: "20px" }} />;
// {
//   `  No hemos encontrado a ${filterName} en ninguno de los
//         universos paralelos  `;
// }
// <img src={warning} alt="warning" style={{ width: "20px" }} />;)}
export default CharacterList;
