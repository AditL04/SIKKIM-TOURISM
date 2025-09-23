import React from 'react';
import './gallery.css';
import monasteries from './galleryData.js';

const Gallery = () => {
  return (
    <div className="gallery-container">
      {monasteries.map(item => (
        <div key={item.id} className="gallery-item">
          <img src={item.src} alt={item.name} className="gallery-image" />
          <div className="gallery-info">
            <h3 className="gallery-title">{item.name}</h3>
            <p className="gallery-year">{item.year}</p>
            <p className="gallery-location">{item.location}</p>
            <p className="gallery-description">{item.description}</p>
            <p className="gallery-tags">{item.tags.join(',  ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery; // Make it a default export
