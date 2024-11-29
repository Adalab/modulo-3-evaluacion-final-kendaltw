import "../scss/App.scss";
import CharacterList from "./CharacterList";
import logo from "../images/title.png";

// import getCharactersFromApi from "../services/getCharactersFromApi";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [message, setMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        const parsedCharacters = data.results.map((character) => {
          return {
            photo: character.image,
            name: character.name,
            species: character.species,
            planet: character.origin.name,
            episodes: character.episode.length,
            status: character.status,
            id: character.id,
          };
        });
        setCharacters(parsedCharacters);
      });
  }, []);

  const onChangeName = (value) => {
    setFilterName(value);
    setHasSearched(true);
  };
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  useEffect(() => {
    if (hasSearched && filteredCharacters.length === 0) {
      setMessage("no encontrado");
    } else {
      setMessage("");
    }
  }, [filterName]);

  //Hacer tarjeta detalle de cada personaje con Route
  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname);

  const urlID = routeData !== null ? routeData.params.idCharacter : null;
  //para buscar en mi lista el personaje que tiene ese id
  const characterItem = characters.find((character) => {
    return parseInt(urlID) === character.id;
  });
  return (
    <>
      <header className="header">
        <img src={logo} alt="Rick & Morty title" />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onChangeName={onChangeName} />
                <CharacterList
                  characters={filteredCharacters}
                  name={filterName}
                  message={message}
                />
              </>
            }
          />
          <Route
            path="/character/:idCharacter"
            element={<CharacterDetail characterItem={characterItem} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
