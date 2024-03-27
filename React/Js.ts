import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => setFilms(data.results))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Films</h1>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <h2>{film.title}</h2>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
            <p><strong>Episode:</strong> {film.episode_id}</p>
            <p><strong>Opening Crawl:</strong> {film.opening_crawl}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;