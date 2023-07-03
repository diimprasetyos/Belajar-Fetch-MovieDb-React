import './App.css';
import Movies from './Movies.js';
import Filter from './Filter.js';
import { useState, useEffect } from 'react';

function App() {
  const [popular, setPopular] = useState([]);
  const [filter, setfilter] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=6fcd09afbdd23a30f3735a2536937188&language=en-US&page=1";

  const fetchPopular = async () => {
    const response = await fetch(url);
    const movies = await response.json();
    console.log(movies);
    setPopular(movies.results);
    setfilter(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <div className='container mx-auto mt-5'>
        <Filter popular={popular} setFilter={setfilter} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {filter.map(movie => {
            return <Movies key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
