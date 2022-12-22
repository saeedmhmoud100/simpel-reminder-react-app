import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function DatesAction(props) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8 d-flex justify-content-between">
        <Button color="prime" className="p-2" onClick={(_) => props.delete()}>
          Delete all
        </Button>
        <Button color="prime" className="p-2" onClick={(_) => props.show()}>
          Show data
        </Button>
      </Col>
    </Row>
  );
}

export default DatesAction;
