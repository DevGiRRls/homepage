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
import AnnyWalker from "views/ProfileCards/AnnyWalker";

export default function WhoWeAre() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">Nosso Time <small className="text-uppercase font-weight-bold">
              (Devas Associadas)
            </small></h3>
        </div>
        <Row>
          <AnnyWalker/>  
          <AnnyWalker/>  
        </Row>
        <Row>
          <AnnyWalker/>  
          <AnnyWalker/>  
        </Row>
      </Container>
    </div>
  );
}
