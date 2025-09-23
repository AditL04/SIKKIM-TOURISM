// src/components/MonasteryExplorer.js
import React, { useState } from "react";
import monasteries from "../data/monasteries";
import PanoramaViewer from "./PanoramaViewer";

function MonasteryExplorer() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Sikkim Monasteries</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {monasteries.map((m) => (
          <li
            key={m.id}
            style={{
              cursor: "pointer",
              margin: "5px 0",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              background: "#f9f9f9",
              transition: "background 0.2s",
            }}
            onClick={() => setSelected(m)}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e0e0e0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f9f9f9")}
          >
            {m.name}
          </li>
        ))}
      </ul>

      {selected && (
        <div style={{ marginTop: "30px" }}>
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>
          <PanoramaViewer panoramaUrl={selected.panorama} />
        </div>
      )}
    </div>
  );
}

export default MonasteryExplorer;
