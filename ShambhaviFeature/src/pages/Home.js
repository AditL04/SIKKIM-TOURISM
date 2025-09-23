// src/pages/Home.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PanoramaViewer from "../components/PanoramaViewer";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url('/images/sikkim-mountains.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Welcome to Sikkim Tourism</h1>
      </div>

      {/* Features Section */}
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <h3>Monasteries</h3>
            <p>Explore the peaceful monasteries of Sikkim.</p>
            <Button variant="primary" href="/tours">
              View Tours
            </Button>
          </Col>
          <Col md={4}>
            <h3>Culture</h3>
            <p>Experience the rich traditions and culture.</p>
          </Col>
          <Col md={4}>
            <h3>Nature</h3>
            <p>Enjoy breathtaking mountains and landscapes.</p>
          </Col>
        </Row>
      </Container>

      {/* Panorama Section */}
      <section
        id="panorama"
        style={{
          marginTop: "80px",
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        {/* Attractive Heading */}
        <h2 style={{ marginBottom: "10px" }}>🌄 Explore 360° Panoramas</h2>
        <p style={{ color: "#555", marginBottom: "40px" }}>
          Take a virtual tour of the most beautiful monasteries and landscapes of Sikkim.
        </p>

        {/* Panorama Viewer */}
        <div style={{ width: "100%", height: "70vh", marginBottom: "80px" }}>
          <PanoramaViewer
            panoramaUrl="/images/pano1.png"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "60px 20px",
          background: "#f8f9fa",
          clear: "both",
        }}
      >
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">
            For inquiries, reach out at <strong>info@sikkimtourism.com</strong>
          </p>
        </Container>
      </section>
    </div>
  );
}

export default Home;
