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
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Button,
  Progress,
  Badge
} from "reactstrap";

export default function WhoWeAre() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
          <Col style={{marginTop: 80}} className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Row>
                  <img
                      alt="..."
                      className="img-fluid rounded-circle shadow-lg"
                      src={require("assets/img/mike.jpg").default}
                      style={{ width: "150px", marginTop: -105 }}
                  />
                  <Col>
                    <h3 className="d-block font-weight-bold mb-2">
                      Anny Walker
                    </h3>
                  </Col>
                </Row>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1,
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-single-02" />
                      Perfil
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2,
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bulb-63" />
                      Skills
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3,
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-palette" />
                      Interesses
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody style={{marginBottom: -40}}>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Formada em Ciência da Computação (UFRR) e uma das fundadoras das DevGiRRls.
                      <br/>A
                      tualmente faz especialização em Desenvolvimento Mobile (PUC Minas) e trabalha como Desenvolvedora Mobile na Ambev Tech!
                      <br/>
                    </p>
                    <Button color="primary" size="sm" onClick={() => window.open("https://silvandante.github.io/meuportfolio/")}>Portfólio</Button>
                  </TabPane>
                  <TabPane tabId="link2">
                    <div className="progress-container progress-success">
                      <span className="progress-badge ">ReactJS</span>
                      <Progress max="10" value="6">
                        <span className="progress-value" style={{marginTop:8}}>INTERMEDIÁRIO</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-success">
                      <span className="progress-badge ">React Native</span>
                      <Progress max="10" value="7">
                        <span className="progress-value" style={{marginTop:8}}>AVANÇADO</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-success">
                      <span className="progress-badge ">Android (Kotlin/Java)</span>
                      <Progress max="10" value="8">
                        <span className="progress-value" style={{marginTop:8}}>AVANÇADO</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-success">
                      <span className="progress-badge ">Ionic</span>
                      <Progress max="10" value="4">
                        <span className="progress-value" style={{marginTop:8}}>INTERMEDIÁRIO</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-success">
                      <span className="progress-badge ">Django</span>
                      <Progress max="10" value="6">
                        <span className="progress-value" style={{marginTop:8}}>INTERMEDIÁRIO</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link3" style={{justifyContent:"space-around"}}>
                    <Badge className="badge-default">Música</Badge>
                    <Badge color="primary">Jogos</Badge>
                    <Badge color="success">PS4</Badge>
                    <Badge color="info">Realidade Aumentada</Badge>
                    <Badge color="warning">Realidade Virtual</Badge>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
  );
}
