// src/pages/Home.js
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <main className="home-page">
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.30)), url('/images/archive1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Discover Sikkim — Monasteries & Tours</h1>
          <p className="hero-sub">
            Explore sacred monasteries, guided tours and local events. Plan your spiritual journey today.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/monasteries">Explore Monasteries</a>
            <a className="btn btn-outline" href="/tours">Browse Tours</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Guided Tours</h3>
          <p>Local guides, flexible schedules — choose a tour that fits you.</p>
        </div>
        <div className="feature-card">
          <h3>Community Events</h3>
          <p>Temples, festivals and local gatherings — see what’s happening.</p>
        </div>
        <div className="feature-card">
          <h3>Book Easily</h3>
          <p>Reserve a slot and pay later — simple booking flow.</p>
        </div>
      </section>
    </main>
  );
}
