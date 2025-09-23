// src/pages/Bookings.js
import React, { useState } from "react";
import api from "../api";
import "./Bookings.css";

export default function Bookings() {
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const fetch = async () => {
    setLoading(true);
    setMsg("");
    try {
      const url = email ? `/bookings?email=${encodeURIComponent(email)}` : "/bookings";
      const res = await api.get(url);
      setItems(res.data || []);
      if ((res.data || []).length === 0) setMsg("No bookings found.");
    } catch (err) {
      console.error(err);
      setMsg("Error fetching bookings.");
    } finally {
      setLoading(false);
    }
  };

  // inline style ensures no webpack errors
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${process.env.PUBLIC_URL}/images/archive6.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bookings-page">
      <section className="bookings-hero" style={heroStyle}>
        <h1>Your Bookings</h1>
        <p>Search and view your reservations</p>
      </section>

      <main className="bookings-main">
        <div className="controls">
          <input
            type="email"
            placeholder="Filter by email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={fetch} disabled={loading}>
            {loading ? "Fetching..." : "Fetch"}
          </button>
        </div>

        {msg && <div className="msg">{msg}</div>}

        <ul className="booking-list">
          {items.map((b) => (
            <li className="booking-card" key={b.id || JSON.stringify(b)}>
              <div className="row">
                <strong>ID:</strong> {b.id}
              </div>
              <div className="row">
                <strong>Email/Phone:</strong> {b.email || b.phone || "—"}
              </div>
              <div className="row">
                <strong>Created At:</strong>{" "}
                {b.createdAt?.seconds
                  ? new Date(b.createdAt.seconds * 1000).toLocaleString()
                  : String(b.createdAt || "—")}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
