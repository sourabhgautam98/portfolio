import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projectData from "../data";
import { Container } from "react-bootstrap";

const Projects = () => {
  const projectsData = projectData();

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
      </div>
      <Container>
        <Row>
          {projectsData.map((data) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={data.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                width: "25rem",
              }}
            >
              <Card className="cards">
                <Card.Body>
                  <Card.Title className="cardTitle">{data.title}</Card.Title>
                  <Card.Text className="cardDescription">
                    {data.description}
                  </Card.Text>
                  <div className="d-grid">
                    <Button
                      as="a"
                      href={data.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        backgroundColor: "#55c2da",
                        border: "none",
                        transition: "background-color 0.3s ease",
                        color: "#ffffff", // Text color
                        textDecoration: "none",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = "#55c2da";
                        e.target.style.background = "none";
                        e.target.style.textDecoration = "none";
                        e.target.style.border = "2px solid #55c2da"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = "#ffffff";
                        e.target.style.background = "#55c2da";
                      }}
                    >
                      Click here
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
