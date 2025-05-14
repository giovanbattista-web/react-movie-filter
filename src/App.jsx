import { useState, useEffect } from 'react';

const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
  {/* VARIABILI DI STATO */ }
  const [genre, setGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  useEffect(() => {
    {/* LOGICA DELLA FUNZIONE DI FILTRAGGIO */ }
    if (genre !== "") {
      {/* ESEGUO IL FILTRAGGIO */ }
      {/* APPLICO IL METODO FILTER AD INITIALMOVIES PER GENERARE UN NUOVO ARRAY CONTENENTE SOLO I FILM CHE HANNO 
        IL GENERE SELEZIONATO */}
      const selectedMovies = initialMovies.filter(movie => movie.genre === genre);
      {/* IMPOSTO IL VALORE DI FILTEREDMOVIES CON IL CONTENUTO DEL NUOVO ARRAY */ }
      setFilteredMovies(selectedMovies)
    } else {
      {/* NON VOGLIO FILTRARE L'ARRAY, MOSTRO TUTTO IL CONTENUTO */ }
      setFilteredMovies(initialMovies);
    }
  }, [genre]);


  return (
    <>
      <div className='container mt-4'>
        <div className='row gy-4'>
          <div className='col-12'>
            <h1>Movies</h1>

          </div>
          <div className='col-12'>
            {/* ON CHANGE PER LA MODALITA' DI SCRITTURA OLTRE ALLA MODALITA' DI LETTURA PRECEDENTE */}
            <select className='form-select' value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">Tutti i generi</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            <hr />

            {/* LISTA MOSTRATA A VIDEO */}
            <ul className='list-group'>
              {filteredMovies.map((movie, index) => {
                return (
                  <li key={index} className='list-group-item'>
                    {movie.title} - <em>{movie.genre}</em>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </>
  )
};

export default App;

{/* BONUS */ }
{/*
  import { useState, useEffect } from 'react';

  const initialMovies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  function App() {
    {/* VARIABILI DI STATO PER OGNI INPUT 
    const [movies, setMovies] = useState(initialMovies);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [genre, setGenre] = useState("");
    const [search, setSearch] = useState("");
    const [newMovieTitle, setNewMovieTitle] = useState("");
    const [newMovieGenre, setNewMovieGenre] = useState("");


    useEffect(() => {
      {/* COME OPERAZIONE PRELIMINARE SE NON SCRIVO NULLA NEL CAMPO DI RICERCA E/ O NON SELEZIONO NULLA DEVO MOSTRARE
    TUTTO L'ARRAY 
      let updatedMovies = movies;
      {/* SE HO SELEZIONATO IL GENERE FILTRO PER GENERE 
      if (genre !== "") {
        updatedMovies = updatedMovies.filter((movie) => movie.genre === genre);
      }
      {/* SE HO INSERITO UNA PAROLA DI RICERCA FILTRO PER QUELLA PAROLA
      if (search !== "") {
        updatedMovies = updatedMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase())
        );
      };
      {/* IMPOSTO IL VALORE DELLA VARIABILE FILTEREDMOVIES A QUELLO DI UPDATEDMOVIES 
      setFilteredMovies(updatedMovies);
    }, [movies, genre, search]);

    const addMovie = (e) => {
      e.preventDefault();
      {/* CONTROLLO CHE L'UTENTE ABBIA INSERITO SIA IL TITOLO CHE IL GENERE DEL NUOVO FILM 
      if (newMovieTitle !== "" && newMovieGenre !== "") {
        {/* CREO IL NUOVO OGGETTO RAPPRESENTANTE IL FILM
        let obj = {
          title: newMovieTitle,
          genre: newMovieGenre,
        };
        {/* VADO AD INSERIRE IL NUOVO OGGETTO NELL'ARRAY DEI FILM
        setMovies([...movies, obj]);
        setNewMovieTitle("");
        setNewMovieGenre("");
      }
    };

    return (
      <>
        <div className='container mt-4'>
          <div className='row gy-4'>
            <div className='col-12'>
              <h1>Movies</h1>
            </div>
            <div className='col-12'>
              <div className='d-flex'>
                <div className='mx-1 w-50'>
                  {/* ON CHANGE PER LA MODALITA' DI SCRITTURA OLTRE ALLA MODALITA' DI LETTURA PRECEDENTE 
                  <select className='form-select' value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">Tutti i generi</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                  </select>
                </div>
                <div className='mx-1 w-50'>
                  <input type="text"
                    placeholder='Cerca...'
                    className='form-control'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
              <hr />

              {/* LISTA MOSTRATA A VIDEO 
              <ul className='list-group'>
                {filteredMovies.map((movie, index) => {
                  return (
                    <li key={index} className='list-group-item'>
                      {movie.title} - <em>{movie.genre}</em>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='col-12'>
              <form onSubmit={addMovie}>
                <div className='input-group'>
                  <input type="text"
                    placeholder='Titolo'
                    className='form-control me-1'
                    value={newMovieTitle}
                    onChange={(e) => setNewMovieTitle(e.target.value)} />
                  <input type="text"
                    placeholder='Genere'
                    className='form-control ms-1'
                    value={newMovieGenre}
                    onChange={(e) => setNewMovieGenre(e.target.value)} />
                  <button className='btn btn-primary'> Aggiungi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  };

  export default App;
*/}
