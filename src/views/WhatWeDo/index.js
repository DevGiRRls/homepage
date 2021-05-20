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


import {
    Container,
    Row,
    Col,
  } from "reactstrap";

export default function WhatWeDo() {
  return (
    <>
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">O que fazemos?</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-laptop" />
                      </div>
                      <h4 className="info-title">Portfólio</h4>
                      <hr className="line-primary" />
                      <p>
                        Queremos auxiliar jovens devas na construções de seus portfólios, com dinâmicas em grupo e indicações de estudo.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-book-bookmark" />
                      </div>
                      <h4 className="info-title">Estudos</h4>
                      <hr className="line-warning" />
                      <p>
                        Comunidade aberta para expor dúvidas e consultar outras colegas e profissionais da área.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-spaceship" />
                      </div>
                      <h4 className="info-title">Soft Skills</h4>
                      <hr className="line-success" />
                      <p>
                        Nas dinâmicas em grupo temos inteção de desenvolver as soft skills de liderança, proatividade e simular ambientes de trabalho.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
    </>
  );
}
