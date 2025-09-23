// src/components/Tours.js
import React, { useEffect, useState } from "react";
import { fetchTours } from "../api";
import "./Tours.css";

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours()
      .then((res) => setTours(res.data || []))
      .catch((err) => console.error("Error fetching tours:", err));
  }, []);

  // IMPORTANT: use process.env.PUBLIC_URL for files inside `public/`
  const heroStyle = {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${process.env.PUBLIC_URL}/images/archive3.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="tours-page">
      <section className="tours-hero" style={heroStyle}>
        <div className="tours-hero-inner">
          <h1 className="tours-title">Tours</h1>
          <p className="tours-sub">Discover curated tours across Sikkim</p>
        </div>
      </section>

      <section className="tours-list">
        <div className="tours-grid">
          {tours.length === 0 ? (
            <p className="empty">No tours available.</p>
          ) : (
            tours.map((t) => (
              <article key={t.id} className="tour-card">
                <h3>{t.name}</h3>
                <p>{t.description || "No description provided."}</p>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Tours;
