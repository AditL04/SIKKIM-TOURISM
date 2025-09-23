// src/pages/ItemView.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function ItemView() {
  const { collection, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get(`/${collection}/${id}`);
        setItem(res.data);
      } catch (err) {
        console.error("Error fetching item:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [collection, id]);

  if (loading) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>;
  if (!item) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Item not found.</div>;

  // format createdAt if exists
  let createdDate = null;
  if (item.createdAt?._seconds) {
    createdDate = new Date(item.createdAt._seconds * 1000).toLocaleDateString();
  }

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.name}</h2>
      {item.location && <p style={{ fontStyle: "italic", color: "#555" }}>{item.location}</p>}
      {createdDate && <p><strong>Added on:</strong> {createdDate}</p>}
      {item.description ? (
        <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>{item.description}</p>
      ) : (
        <p style={{ marginTop: "1rem", fontStyle: "italic" }}>No description available.</p>
      )}
    </div>
  );
}
