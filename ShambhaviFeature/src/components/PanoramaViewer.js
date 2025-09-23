// src/components/PanoramaViewer.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as PANOLENS from "panolens";

// ✅ Attach THREE globally for Panolens
if (!window.THREE) {
  window.THREE = THREE;
}

function PanoramaViewer({ panoramaUrl }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !panoramaUrl) return;

    // Clean old canvases
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    if (viewerRef.current) {
      viewerRef.current.dispose();
      viewerRef.current = null;
    }

    const panorama = new PANOLENS.ImagePanorama(panoramaUrl);
    const viewer = new PANOLENS.Viewer({
      container: containerRef.current,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      controlBar: true,
    });

    viewer.add(panorama);
    viewerRef.current = viewer;

    // Force resize after mount (important for React)
    setTimeout(() => viewer.onWindowResize(), 100);

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;
      }
      while (containerRef.current?.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, [panoramaUrl]);

  if (!panoramaUrl) return null;

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "500px", // 👈 always visible
        background: "black",
      }}
    />
  );
}

export default PanoramaViewer;
