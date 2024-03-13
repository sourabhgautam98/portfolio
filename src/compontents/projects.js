import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headphone from "../assets/img12.png"
import laptop from "../assets/img11.png"
import weather from "../assets/img14.png"
import travel from "../assets/img13.png"
import news from "../assets/img15.png"
import weathers from "../assets/img16.png"

const Projects = () => {
  return (
    <section id="project">
      <span className="projecttitle">My Recent Project</span>
      <p className="projectpara">
        Here are a projects i`vs worked on recently.
      </p>
      <Container>
        <Row>
          <Col md={4} className="projgap">
            <Card style={{ width: "18rem", height:"35rem" }}>
              <Card.Img variant="top" src={laptop}/>
              <Card.Body>
                <Card.Title>Laptop Ui Design</Card.Title>
                <Card.Text>
                  Implemented parallax scroll effect for Mac laptop interface
                  design in Figma, enhancing user engagement through dynamic
                  visual depth. Utilized Figma's interactive features for
                  seamless prototyping and collaborated closely with
                  stakeholders to ensure alignment with project goals.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary"><a href="https://www.figma.com/file/cpr93hc2YoupdI6Ir7TAWh/3-projects?type=design&node-id=12%3A158&mode=design&t=5FneHP878gjSh2sy-1">Go to figma</a></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="projgap">
            <Card style={{ width: "18rem",height:"35rem" }}>
              <Card.Img variant="top" src={headphone} />
              <Card.Body>
                <Card.Title>Headphone Ui Design</Card.Title>
                <Card.Text>
                  Designed a cutting-edge mesh gradient headphone concept using
                  Figma, emphasizing sleek aesthetics and ergonomic comfort.
                  Employed UI/UX principles to craft a visually captivating
                  design, collaborating closely with stakeholders for feedback
                  integration.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary"><a href="https://www.figma.com/file/cpr93hc2YoupdI6Ir7TAWh/3-projects?type=design&node-id=23%3A2&mode=design&t=5FneHP878gjSh2sy-1">Go to figma</a></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="projgap">
            <Card style={{ width: "18rem",height:"35rem" }}>
              <Card.Img variant="top" src={weather} />
              <Card.Body>
                <Card.Title>Weather Ui Design</Card.Title>
                <Card.Text>
                  Crafted a visually engaging and user-friendly weather app
                  interface in Figma, featuring real-time weather updates,
                  intuitive navigation, and responsive design. Integrated APIs
                  for accurate data retrieval and prioritized accessibility
                  considerations
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary"><a href="https://www.figma.com/file/SFfim31dP9uCgp6AOL3Gpf/project?type=design&node-id=14%3A5&mode=design&t=1Nx8fhv46ReFXGe8-1">Go to figma</a></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="projgap">
            <Card style={{ width: "18rem",height:"35rem" }}>
              <Card.Img variant="top" src={travel} />
              <Card.Body>
                <Card.Title>Travel Ui Design</Card.Title>
                <Card.Text>
                  Designed a captivating travel package website interface using
                  Figma, focusing on seamless user experience and visually
                  enticing layouts. Incorporated intuitive navigation, stunning
                  imagery, and clear callto-action elements to drive
                  conversions.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary"><a href="https://www.figma.com/file/cpr93hc2YoupdI6Ir7TAWh/3-projects?type=design&node-id=50%3A2&mode=design&t=5FneHP878gjSh2sy-1">Go to figma</a></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="projgap">
            <Card style={{ width: "18rem",height:"35rem" }}>
              <Card.Img variant="top" src={weathers} />
              <Card.Body>
                <Card.Title>Weather website React js</Card.Title>
                <Card.Text>
                Weather is your go-to destination for up-to-the-minute weather updates in your area. With a sleek and minimalist design, our website offers all the essential information you need to plan your day or week effectively. Whether you're a commuter, a traveler, or simply curious about the weather, WeatherWatch provides accurate and reliable data at your fingertips.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary"><a href="https://github.com/sourabhgautam98/weather-website">Go to Github</a></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="projgap">
            <Card style={{ width: "18rem",height:"35rem" }}>
              <Card.Img variant="top" src={news} />
              <Card.Body>
                <Card.Title>News website React js</Card.Title>
                <Card.Text>
                News is your gateway to staying informed with the latest breaking news as it happens. Our minimalist-designed website delivers a seamless news browsing experience without overwhelming clutter, ensuring that you get the news you need without unnecessary distractions. Whether you're a news junkie, a professional staying abreast of current events.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary"><a href="https://github.com/sourabhgautam98/firstlook">Go to Github</a></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
