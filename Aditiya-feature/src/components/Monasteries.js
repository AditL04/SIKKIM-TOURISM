// src/components/Monasteries.js
import React, { useEffect, useState } from "react";
import { fetchMonasteries } from "../api";
import { Link } from "react-router-dom";   // ✅ use Link instead of <a>
import "./Monasteries.css";

export default function Monasteries() {
  const [monasteries, setMonasteries] = useState([]);

  useEffect(() => {
    fetchMonasteries()
      .then((res) => setMonasteries(res.data || []))
      .catch((err) => {
        console.error("Error fetching monasteries:", err);
        setMonasteries([]);
      });
  }, []);

  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/archive2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="monasteries-hero" style={heroStyle}>
      <div className="monasteries-inner">
        <h1 className="monasteries-title">Monasteries</h1>
        <p className="monasteries-sub">
          Explore the spiritual and cultural heart of Sikkim
        </p>

        <div className="monasteries-grid">
          {monasteries.length === 0 ? (
            <div className="no-data">No monasteries found.</div>
          ) : (
            monasteries.map((m) => (
              <Link
                key={m.id}
                to={`/monasteries/${m.id}`}   // ✅ client-side routing
                className="monastery-card"
                title={m.name}
              >
                {m.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
