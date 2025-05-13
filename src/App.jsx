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
  return (
    <>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-12'>
            <h1>FILM</h1>
          </div>
          <div className='col-12'>
            <ul className='list-group'>
              {films.map((film, index) => (
                <li className='list-group-item' key={index}>
                  <div>
                    <div>{film.title}</div>
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
