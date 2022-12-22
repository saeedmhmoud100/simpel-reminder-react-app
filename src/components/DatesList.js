import React from "react";
import { Col, Row } from "react-bootstrap";

function DatesList({ dates }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-3">
          {dates.length ? (
            dates.map((date) => (
              <div className="d-flex border-bottom my-2" key={date.id}>
                <img src={date.image} alt="img" className="img-avatar" />
                <div className="mx-3">
                  <p className="d-inline fs-5">{date.name}</p>
                  <p className="fs-6">{date.date}</p>
                </div>
              </div>
            ))
          ) : (
            <h2 className="p-5 text-center">there are no dates</h2>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default DatesList;
