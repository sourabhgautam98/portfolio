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
import projectData from "../data";

const projects = () => {
  const projectsData = projectData(); 

  return (
    <>

    {/* // <section id="projects"> */}
      <span style={{textAlign:"center"}} className="projecttitle">My Recent Project</span>
      <p className="projectpara">
        Here are a projects i`vs worked on recently.
      </p>

        <Row>
          {projectsData.map((data)=>(
          <Col  xs={12} sm={6} md={4} lg={4} key={data.id} style={{display:"flex",justifyContent:"center"}}>
            <Card className="cards" >
              {/* <Card.Img variant="top" src={laptop}/> */}
              <Card.Body>
                <Card.Title className="cardTitle">{data.title}</Card.Title>
                <Card.Text className="cardDescription">
                {data.description}
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" ><a href={data.url} target="_blank" rel="noreferrer">Go to figma</a></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
            ))}
          </Row>

    </>
  );
};

export default projects;
