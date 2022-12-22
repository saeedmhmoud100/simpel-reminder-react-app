import { Container, Row, Col, Button } from "react-bootstrap";
function App() {
  return (
    <div className="color-body">
      <Container className="py-5">
        <Row className="justify-content-center my-2">
          <Col sm="8">You have 5 alarm</Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle p-3">
              <div className="d-flex border-bottom my-2">
                <img src="img.jpg" alt="img" className="img-avatar" />
                <div className="mx-3">
                  <p className="d-inline fs-5">mohamed ali</p>
                  <p className="fs-6">5pm</p>
                </div>
              </div>
              <div className="d-flex border-bottom my-2">
                <img src="img.jpg" alt="img" className="img-avatar" />
                <div className="mx-3">
                  <p className="d-inline fs-5">mohamed ali</p>
                  <p className="fs-6">5pm</p>
                </div>
              </div>
              <div className="d-flex border-bottom my-2">
                <img src="img.jpg" alt="img" className="img-avatar" />
                <div className="mx-3">
                  <p className="d-inline fs-5">mohamed ali</p>
                  <p className="fs-6">5pm</p>
                </div>
              </div>
              <div className="d-flex border-bottom my-2">
                <img src="img.jpg" alt="img" className="img-avatar" />
                <div className="mx-3">
                  <p className="d-inline fs-5">mohamed ali</p>
                  <p className="fs-6">5pm</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-2">
          <Col sm="8 d-flex justify-content-between">
            <Button color="prime" className="p-2">
              Delete all
            </Button>
            <Button color="prime" className="p-2">
              Show data
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
