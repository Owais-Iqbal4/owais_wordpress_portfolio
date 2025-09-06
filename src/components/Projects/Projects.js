import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import thefutureperfect from "../../Assets/Projects/thefutureperfect.png"
import xenali from "../../Assets/Projects/xenali.png"
import ownaword from "../../Assets/Projects/ownaword.png"
import maison from "../../Assets/Projects/maison.png"
import badminton from "../../Assets/Projects/badminton.png"
import prettyneat from "../../Assets/Projects/prettyneat.png"
import soyoung from "../../Assets/Projects/soyoung.png"
import tinyhands from "../../Assets/Projects/tinyhands.png"
import vibesandvapours from "../../Assets/Projects/vibesandvapours.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thefutureperfect}
              isBlog={false}
              title="The Future Perfect"
              description="Made By is a collection of works exclusive to The Future Perfect, spanning a wide selection of American and international designers and manufacturers. Made By carries pieces from over 100 artists and studios, representing brands with unique, made-to-order, limited-edition works of art, furniture, textiles, lighting, and objects."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.thefutureperfect.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xenali}
              isBlog={false}
              title="Xenali"
              description="Since our inception to this Industry in 2003, we have dedicated ourselves to finding the best products and creating the best solutions, all at the best price. This is due solely to our International Partners whose work ethic, and dedication to their craft meet our meticulous standards. This means we maintain a large volume of inventory. When you require a unique solution, our International Design Teams will develop the custom solutions that will elevate your Project to the next level."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.xenali.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ownaword}
              isBlog={false}
              title="Ownaword"
              description="We believe that words are more than just symbols — they carry memories, milestones, and emotions. At Own A Word™, we help you make a word yours, forever. And that’s why we made it easy for anyone to claim a word they’ll never forget."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://ownaword.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maison}
              isBlog={false}
              title="Maison Numen"
              description="beautiful object dazzles us. A flawless technique moves us. An honest story brings us closer to mankind. A Maison Numen object is the perfect mix of beauty, technique and tradition."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://maisonnumen.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={badminton}
              isBlog={false}
              title="Badminton"
              description="Das Badminton-Center Mörsenbroich in Düsseldorf verfügt über 18 Badmintonfelder mit Gelenk-schonendem Schwingboden, perfekter Sicht und Beleuchtung. Auf unserer Webseite erfahren Sie mehr über das größte Badminton-Fachgeschäft in Düsseldorf."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.badminton-center.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prettyneat}
              isBlog={false}
              title="Pretty neat shop"
              description="Das Badminton-Center Mörsenbroich in Düsseldorf verfügt über 18 Badmintonfelder mit Gelenk-schonendem Schwingboden, perfekter Sicht und Beleuchtung. Auf unserer Webseite erfahren Sie mehr über das größte Badminton-Fachgeschäft in Düsseldorf."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://prettyneatshop.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soyoung}
              isBlog={false}
              title="Soyoung"
              description="Our bags made for packing lunch and your daily necessities infuse your day with timeless beauty, thoughtful functionality, and lasting durability."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://soyoung.ca/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinyhands}
              isBlog={false}
              title="Tiny Hands"
              description="The perfect gifts for kids and grown-ups who love food, candy and miniature things 💖"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://tinyhandsonline.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vibesandvapours}
              isBlog={false}
              title="Vibes And vapours"
              description="Be the first to hear about our latest launches, exclusive offers and limited-edition collaborations"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://vibesandvapours.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
