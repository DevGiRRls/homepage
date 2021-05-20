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
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Contact() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Gostou da nossa proposta e quer participar ou nos apoiar?
            </h2>
            <h4 className="description">
              Entre em contato com uma de nossas administradoras com o e-mail abaixo.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="mailto:annyufrr@gmail.com"
              role="button"
              size="lg"
            >
              annyufrr@gmail.com
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">
              Obrigada por ter vindo até aqui.
            </h3>
            <h4 className="mb-0 font-weight-light">
              Para mantermos contato nos acompanhe nas nossas outras plataformas.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              id="twitter"
              size="lg"
            >
              <i className="fab fa-twitter" />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              Tweet!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="facebook"
              id="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square" />
            </Button>
            <UncontrolledTooltip delay={0} target="facebook">
              Compartilhar
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="github"
              href="https://github.com/creativetimofficial"
              id="tooltip877922017"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-github" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Ir no Github
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
