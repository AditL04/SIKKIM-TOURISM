// src/components/Archive.js
import React, { useEffect, useState } from "react";
import { ref as dbRef, onValue } from "firebase/database";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Archive() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const r = dbRef(db, "archive"); // we expect /archive/{autoId} => { title, url }
    const unsub = onValue(r, (snap) => {
      const val = snap.val();
      const arr = val ? Object.values(val) : [];
      setImages(arr);
    }, (err) => console.error("Realtime DB read error:", err));
    return () => unsub();
  }, []);

  if (!images.length) return null;

  return (
    <div style={{ maxWidth: 1000, margin: "16px auto" }}>
      <h3>Archive</h3>
      <Swiper spaceBetween={10} slidesPerView={1} loop>
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div style={{ position: "relative" }}>
              <img src={img.url} alt={img.title || `img-${i}`} style={{ width: "100%", height: 420, objectFit: "cover" }} />
              <div style={{ position: "absolute", left: 20, bottom: 20, color: "#fff", background: "rgba(0,0,0,0.45)", padding: "6px 10px", borderRadius: 4 }}>
                {img.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
