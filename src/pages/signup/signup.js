import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import GoogleLogo from "../../assets/google-logo.svg";
import ImageComp from "../../components/imageComp/imageComp";
import './signup.css'
class Signup extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <div className="signup-wrapper">
          <Row>
            <Col md={8} lg={8} xl={8} xxl={8} >
              <div className="logo">
                <Image src={GoogleLogo} alt="Logo" />
              </div>
              <h1 className="title">Create your Google Account</h1>
              <p className="sub-title">to continue to Gmail</p>
              <Form>
                <Row>
                  <Col lg={6}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Firstname" />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                  <Form.Group >
                    <Form.Control type="text" placeholder="Lastname" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                <Col>
                  <Form.Group >
                    <Form.Label className="floating-label" >@gmail.com</Form.Label>
                    <Form.Control type="email" placeholder="Username" />
                    <p className="hint" >You can use letters, numbers & periods</p>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-0">
                  <Col>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group >
                    <Form.Control type="password" placeholder="Confirm" />
                    </Form.Group>
                  </Col>
                  <Col className="eye-btn">
                  <Button variant="link">eye</Button>
                  </Col>
                </Row>
                <p className="hint mb-5" >Use 8 or more characters with a mix of letters, numbers & symbols</p>

                <Row className>
                  <Col className="">
                  <Button variant="link" className="signin-btn">Sign in instead</Button>
                  </Col>
                  <Col className="d-flex justify-content-end">
                  <Button variant="primary" className="next-btn">Next</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col  md={4} xl={4} xxl={4}  lg={4} className="img-wrapper">
              <ImageComp />
              <p className="img-text">One account. All of Google working for you.</p>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Signup;
