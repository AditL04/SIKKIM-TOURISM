import React from "react";
import { Container, Accordion } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">About Sikkim Tourism</h1>

      <Accordion defaultActiveKey="0">
        {/* General Info */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>About Sikkim</Accordion.Header>
          <Accordion.Body>
            Sikkim, a serene Himalayan state in northeastern India, is renowned
            for its breathtaking landscapes, rich cultural heritage, and
            spiritual landmarks. Nestled amidst towering mountains, lush valleys,
            sparkling rivers, and high-altitude lakes, Sikkim offers a unique
            blend of natural beauty and traditional culture that attracts
            travelers from across the globe.
          </Accordion.Body>
        </Accordion.Item>

        {/* Culture & Monasteries */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Culture & Monasteries</Accordion.Header>
          <Accordion.Body>
            The state is home to diverse communities including Lepchas, Bhutias,
            and Nepalis, whose traditions, festivals, and handicrafts enrich the
            local culture. Monasteries form the spiritual and historical heart of
            Sikkim, serving as centers for meditation, learning, and preservation
            of Buddhist art and architecture.
          </Accordion.Body>
        </Accordion.Item>

        {/* Virtual Tours */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Virtual Tours of Monasteries</Accordion.Header>
          <Accordion.Body>
            Our tourism website is designed to provide immersive virtual
            experiences of Sikkim's most iconic monasteries. These virtual tours
            allow visitors to explore intricate architecture, sacred relics,
            vibrant festivals, and panoramic Himalayan views from anywhere in the
            world.
          </Accordion.Body>
        </Accordion.Item>

        {/* Attractions */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Why Explore Sikkim?</Accordion.Header>
          <Accordion.Body>
            Sikkim offers a wide range of attractions beyond monasteries.
            Visitors can explore Gangtok, the state capital, known for its
            bustling markets, viewpoints, and cultural events. Natural wonders
            like Tsomgo Lake, Nathula Pass, and Yumthang Valley offer adventure
            and photography opportunities, while trekking, river rafting, and
            mountain biking satisfy thrill-seekers. The state's commitment to
            sustainable tourism ensures that travel here remains eco-friendly and
            culturally respectful.
          </Accordion.Body>
        </Accordion.Item>

        {/* Summary */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Conclusion</Accordion.Header>
          <Accordion.Body>
            Whether planning a physical visit or exploring virtually, our website
            aims to bridge the gap between travelers and the mesmerizing beauty
            of Sikkim. Learn, experience, and fall in love with the Himalayas
            through our curated virtual journeys.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default About;
