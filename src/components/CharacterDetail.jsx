function CharacterDetail({ characterItem }) {
  console.log(characterItem);
  return (
    <div className="detail">
      <img src={characterItem.photo} alt={characterItem.name} />
      <h4>{characterItem.name}</h4>
      <p>{characterItem.species}</p>
      <p>{characterItem.planet}</p>
      <p>{characterItem.episodes}</p>
      <p>{characterItem.status}</p>
    </div>
  );
}

export default CharacterDetail;
