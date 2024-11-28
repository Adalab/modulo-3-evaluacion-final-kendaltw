const getCharactersFromApi = () => {
    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            const parsedCharacters = data.results.map((character) => {
                return {
                    photo: character.image,
                    name: character.name,
                    species: character.species,
                    planet: character.origin.name,
                    episodes: character.episode.length,
                    status: character.status,
                    id: character.id,
                }

            })
            return (parsedCharacters);
        })
}
export default getCharactersFromApi;