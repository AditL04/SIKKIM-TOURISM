import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import  monasteries from './galleryData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sikkim Monastery Gallery 🏞️</h1>
        <p>Explore the spiritual and architectural beauty of Sikkim's monasteries.</p>
      </header>

      <div className="gallery">
        {monasteries.map((monastery) => (
          <div key={monastery.id} className="card">
            <Zoom
              zoomImg={{
                src: monastery.src, // fallback to src if no high-res
                style: {
                  width: '100vw',
                  maxHeight: '100vh',
                  objectFit: 'contain'
                }
              }}
            >
              <img
                src={monastery.src}
                alt={monastery.name}
                className="monastery-image"
              />
            </Zoom>

            <h2>{monastery.name}</h2>
            <p><strong>Location:</strong> {monastery.location}</p>
            <p><strong>Established:</strong> {monastery.year}</p>
            <p>{monastery.description}</p>
            <p><strong>Tags:</strong> {monastery.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;