import React, { useEffect, useState } from "react";
import { fetchEvents } from "../api";
import "./Events.css"; // we’ll style in Events.css

function formatDate(value) {
  if (!value) return "";
  // Firestore timestamp case
  if (typeof value === "object") {
    const sec = value._seconds ?? value.seconds;
    if (typeof sec === "number") {
      return new Date(sec * 1000).toISOString().slice(0, 10);
    }
  }
  // fallback: plain string
  try {
    const d = new Date(value);
    if (!isNaN(d)) return d.toISOString().slice(0, 10);
  } catch (e) {}
  return String(value);
}

const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then((res) => setEvents(res.data || []))
      .catch((err) => {
        console.error("Error fetching events:", err);
        setError("Failed to load events");
      });
  }, []);

  // SAFE hero background style
  const heroStyle = {
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.25)), url(${process.env.PUBLIC_URL}/images/archive4.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="events-page">
      <section className="events-hero" style={heroStyle}>
        <div className="events-hero-inner">
          <h1 className="events-title">Events</h1>
          <p className="events-sub">Discover upcoming festivals and cultural programs</p>
        </div>
      </section>

      <main className="events-list-wrapper">
        <div className="events-container">
          {error && <div className="events-error">{error}</div>}
          {events.length === 0 && !error ? (
            <div className="events-empty">No events found.</div>
          ) : (
            <ul className="events-list">
              {events.map((e) => (
                <li key={e.id} className="event-card">
                  <h3 className="event-name">{e.name}</h3>
                  <div className="event-date">{formatDate(e.date)}</div>
                  {e.description && <p className="event-desc">{e.description}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Events;
