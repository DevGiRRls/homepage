/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";
import MovieRatings from "views/ProjectsCard/MovieRatings";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];

export default function Projects() {
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <div className="section">
        <Container>
          <div className="title">
            <h3>Projetos</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <MovieRatings/>
            
          </Row>
        </Container>
      </div>
    </div>
  );
}
