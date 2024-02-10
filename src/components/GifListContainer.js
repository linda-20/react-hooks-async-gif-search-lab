// GifListContainer.js
import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  // Function to fetch data from Giphy API
  const fetchGifs = (query) => {
    // Fetch data from Giphy API and update gifs state
    // Code for fetching data goes here
  };

  return (
    <div>
      <GifSearch fetchGifs={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
