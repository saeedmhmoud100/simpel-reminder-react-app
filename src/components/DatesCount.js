import React from "react";
import { Col, Row } from "react-bootstrap";

function DatesCount({ dates }) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8">You have {dates.length} dates</Col>
    </Row>
  );
}

export default DatesCount;
