import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/HOS.png";
import projImg2 from "../assets/img/Oak.png";
import projImg3 from "../assets/img/Clay.png";
import projImg4 from "../assets/img/True.png";
import projImg5 from "../assets/img/Fetch.png";
import projImg6 from "../assets/img/Xyst.png";
import projImg7 from "../assets/img/Flying.png";
import projImg8 from "../assets/img/D'ama.png";
import projImg9 from "../assets/img/BB.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Line } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "House of Sause",
      description: "Fashion Brand",
      imgUrl: projImg1,
      link: "https://hosause.com/",
    },
    {
      title: "The Oak Age",
      description: "Supplement Brand",
      imgUrl: projImg2,
      link: "https://www.theoakage.com/"
    },
    {
      title: "Claymistry",
      description: "Ceramics Brand",
      imgUrl: projImg3,
      link: "https://claymistry.com/"
    },
    {
      title: "True Diamond",
      description: "Diamond Brand",
      imgUrl: projImg4,
      link: "https://truediamond.in/"
    },
    {
      title: "Fetch",
      description: "Pet Care Products",
      imgUrl: projImg5,
      link: "https://fetchpetproducts.in/"
    },
    {
      title: " Xyst Care",
      description: "Beauty Brand",
      imgUrl: projImg6,
      link: "https://xystcare.com/"
    },
    {
      title: "Flying Kombucha",
      description: "Natural Drinks Brand",
      imgUrl: projImg7,
      link: "https://flyingkombucha.com/"
    },
    {
      title: "D'amazonia",
      description: "Healthy Tea Brand",
      imgUrl: projImg8,
      link: "https://www.damazonia.co.uk/"
    },{
      title: "Bloom Buddy",
      description: "Pesticides Brand",
      imgUrl: projImg9,
      link: "https://www.bloombuddy.in/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
