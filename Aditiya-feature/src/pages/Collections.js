// src/pages/Collections.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

export default function Collections() {
  const { collection } = useParams(); // 'monasteries' | 'tours' | 'events'
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get(`/${collection}`);
        setItems(res.data || []);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, [collection]);

  return (
    <div style={{ maxWidth: 1000, margin: "12px auto" }}>
      <h2>{collection}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
        {items.map(it => (
          <div key={it.id} style={{ padding: 12, border: "1px solid #ddd", borderRadius: 6 }}>
            <h4>{it.name}</h4>
            <p>{it.description?.slice(0,120) || ""}</p>
            <Link to={`/${collection}/${it.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
