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
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
  Badge
} from "reactstrap";

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

export default function MovieRatings() {
  return (
      <>
            <Col className="mb-5 mb-lg-10" lg="5">
              <h1 className="text-white font-weight-light">
                Movie Ratings
              </h1>
              <p className="text-white mt-4">
                Projeto para exercitar desenvolvimento Web e metodologia ágil,
                a intenção é criar um app e site para visualizar filmes, notas de filmes, elencos e outros itens sobre cinema!
              </p>
              <p className="text-white mt-4">
                Desenvolvedoras
              </p>
              <ul>
                <li>Anny Walker</li>
                <li>Anny Walker</li>
                <li>Anny Walker</li>
              </ul>
              <Badge className="badge-default">FrontEnd ReactJS</Badge>
              <Badge className="badge-default">Mobile React Nat ive</Badge>
              <Badge className="badge-default">Backend NodeJS</Badge>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Ver projeto
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
    </>
  );
}
