import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import Tabs from "../Tabs";
import { Main } from "./Main";

function Shell(props) {
  return (
    <Main>
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <Tabs />
            </Col>
          </Row>
          <Row>{props.children}</Row>
        </Col>
      </Row>
    </Main>
  );
}

export default Shell;
