import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const characterElements = characters.map((character) => {
    return <CharacterCard key={character.id} characters={character} />;
  });
  return (
    <section className="list-title">
      <h3>Lista de personajes</h3>
      <ul className="list">{characterElements}</ul>;
    </section>
  );
}

export default CharacterList;
