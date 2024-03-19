import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projectData from "../data";

const projects = () => {
  const projectsData = projectData(); 

  return (
    <>

  <section id="projects"> 
      <span style={{textAlign:"center"}} className="projecttitle">My Recent Project</span>
      <p className="projectpara">
        Here are a projects i`vs worked on recently.
      </p>
        <Row>
          {projectsData.map((data)=>(
          <Col  xs={12} sm={6} md={4} lg={4} key={data.id} style={{display:"flex",justifyContent:"center"}}>
            <Card className="cards" >
              <Card.Img variant="top" src={data.img}/>
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
          </section>
    </>
  );
};

export default projects;
