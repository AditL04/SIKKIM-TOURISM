import React, { useState } from "react";
import api from "../api";
import "./BookingForm.css";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    itemId: "",
    notes: "",
  });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/bookings", form);
      setMsg("Booking created: " + (res.data.id || "success"));
      setForm({ name: "", email: "", itemId: "", notes: "" });
    } catch (err) {
      console.error(err);
      setMsg("Error creating booking");
    } finally {
      setTimeout(() => setMsg(""), 2500);
    }
  };

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.25)), url(${process.env.PUBLIC_URL}/images/archive5.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "32vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="booking-page">
      <section className="booking-hero" style={heroStyle}>
        <div className="booking-hero-inner">
          <h1>Book a Visit</h1>
          <p>Fill in the form to create a booking</p>
        </div>
      </section>

      <main className="booking-main">
        <div className="booking-card">
          <h2>Create Booking</h2>

          <form className="booking-form" onSubmit={submit}>
            <input
              required
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Item ID (optional)"
              value={form.itemId}
              onChange={(e) => setForm({ ...form, itemId: e.target.value })}
            />
            <textarea
              placeholder="Notes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
            <button type="submit">Book</button>
          </form>

          {msg && <div className="booking-msg">{msg}</div>}
        </div>
      </main>
    </div>
  );
}
