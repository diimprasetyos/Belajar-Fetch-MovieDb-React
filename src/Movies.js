import React from 'react';
import './App.css';
const Movies = ({movie}) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path}/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{movie.title}</div>
          <p class="text-gray-700 text-base">
            {movie.overview}
          </p>
        </div>
      </div>
    
    );
    }
export default Movies;