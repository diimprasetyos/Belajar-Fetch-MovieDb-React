import React from 'react';
import { useEffect } from 'react';

const Filter = ({popular, setFilter, activeGenre, setActiveGenre}) => {
    useEffect(() => {
        if (activeGenre === 0) {
          setFilter(popular); 
          return;
        }
        const filter = popular.filter((movie) =>
          movie.genre_ids.includes(activeGenre),
        );
        setFilter(filter);
      }, [activeGenre]);
    return (
        <div className='container mx-auto'>
        <button onClick={() => setActiveGenre(0)} 
        className= {activeGenre === 0 ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active mx-2" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"}>All</button>
        <button onClick={() => setActiveGenre(35)} 
        className={activeGenre === 35 ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active mx-2" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"}>Comedy</button>
        <button onClick={() => setActiveGenre(28)} 
        className={activeGenre === 28 ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active mx-2" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"}>Action</button>
        </div>
    );
};

export default Filter;