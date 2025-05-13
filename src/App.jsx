import { useState, useEffect } from 'react';

const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  const [genre, setGenre] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(films);

  useEffect(() => {
    console.log("updated");
    if (genre === "") { setFilteredFilms(films) }
    else {
      const selectedFilms = films.filter((films) =>
        films.genre === genre);

      setFilteredFilms(selectedFilms);
    }
  }, [genre]);

  function handleIncrement() {
    setGenre((current) => current + 1);
  }

  return (
    <>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-12'>
            <h1>FILM</h1>
            <select value={genre} onChange={(e) => { setGenre(e.target.value) }} className="form-select" aria-label="Default select example">
              <option value="">Open this select menu</option>
              <option value="1">Fantascienza</option>
              <option value="2">Thriller</option>
              <option value="3">Romantico</option>
              <option value="4">Azione</option>
            </select>
          </div>
          <div className='col-12'>
            <ul className='list-group'>
              {filteredFilms.map((films, index) => (
                <li className='list-group-item' key={index}>
                  <div>
                    <div>{films.title}</div>
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )

};

export default App;
