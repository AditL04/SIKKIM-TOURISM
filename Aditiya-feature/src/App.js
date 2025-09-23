// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
import Archive from "./components/Archive";
import Home from "./pages/Home";
// Pages
import Collections from "./pages/Collections";
import ItemView from "./pages/ItemView";
import BookingForm from "./pages/BookingForm";
import Bookings from "./pages/Bookings";
import ChatPage from "./pages/ChatPage"; // ✅ new chatbot page

// Fetch components (connected to backend)
import Monasteries from "./components/Monasteries";
import Tours from "./components/Tours";
import Events from "./components/Events";

function App() {
  return (
    <Router>
      {/* ✅ Modern Navbar */}
      <header
        style={{
          padding: "16px 32px",
          background: "linear-gradient(90deg, #4a90e2, #9013fe)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/monasteries", label: "Monasteries" },
            { to: "/tours", label: "Tours" },
            { to: "/events", label: "Events" },
            { to: "/book", label: "Book" },
            { to: "/bookings", label: "My Bookings" },
            { to: "/chat", label: "Chat" }, // ✅ new chatbot link
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#ffd700")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Archive slider always visible */}
      <Archive />

      <main style={{ padding: "12px" }}>
        <Routes>
          {/* ✅ Home */}
          <Route path="/" element={<Home />} />

          {/* Booking form and bookings list */}
          <Route path="/book" element={<BookingForm />} />
          <Route path="/bookings" element={<Bookings />} />

          {/* Firestore collections through backend */}
          <Route path="/monasteries" element={<Monasteries />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/events" element={<Events />} />

          {/* ✅ Chatbot route */}
          <Route path="/chat" element={<ChatPage />} />

          {/* Generic fallback routes */}
          <Route path="/:collection" element={<Collections />} />
          <Route path="/:collection/:id" element={<ItemView />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
