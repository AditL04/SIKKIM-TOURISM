// src/pages/Tours.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import MapView from "../components/MapView";
import PanoramaViewer from "../components/PanoramaViewer";
import monasteries from "../data/monasteries";

const Tours = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  return (
    <Container fluid className="py-4">
      <h2 className="text-center mb-4">Explore Sikkim Monasteries</h2>

      <Row>
        {/* Map Section */}
        <Col md={7}>
          <MapView
            monasteries={monasteries}
            onMarkerClick={(monastery) => setSelectedMonastery(monastery)}
          />
        </Col>

        {/* Image + Details */}
        <Col md={5}>
          {selectedMonastery ? (
            <Card className="shadow-lg p-3">
              <h3>{selectedMonastery.name}</h3>
              <p>{selectedMonastery.description}</p>

              <Image
                src={selectedMonastery.image}
                alt={selectedMonastery.name}
                fluid
                rounded
                className="mb-3"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </Card>
          ) : (
            <p className="text-muted">Click on a marker to see details.</p>
          )}
        </Col>
      </Row>

      {/* ✅ Panorama clean, no extra wrappers */}
      {selectedMonastery?.panorama && (
        <div className="mt-4" style={{ width: "100%", height: "500px" }}>
          <PanoramaViewer panoramaUrl={selectedMonastery.panorama} />
        </div>
      )}
    </Container>
  );
};

export default Tours;
