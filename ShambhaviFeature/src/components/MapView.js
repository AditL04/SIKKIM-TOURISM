// src/components/MapView.js
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icon issue
let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Fit map bounds to markers
const FitBounds = ({ monasteries }) => {
  const map = useMap();
  useEffect(() => {
    if (monasteries.length > 0) {
      const bounds = L.latLngBounds(monasteries.map((m) => [m.lat, m.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [monasteries, map]);
  return null;
};

const MapView = ({ monasteries, onMarkerClick }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}> {/* Full viewport height */}
      <MapContainer
        center={[27.33, 88.61]}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {monasteries.map((m) => (
          <Marker
            key={m.id}
            position={[m.lat, m.lng]}
            eventHandlers={{ click: () => onMarkerClick(m) }}
          >
            <Popup>
              <div style={{ textAlign: "center" }}>
                <h6>{m.name}</h6>
                <img
                  src={m.image}
                  alt={m.name}
                  style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "4px" }}
                />
              </div>
            </Popup>
          </Marker>
        ))}

        <FitBounds monasteries={monasteries} />
      </MapContainer>
    </div>
  );
};

export default MapView;
