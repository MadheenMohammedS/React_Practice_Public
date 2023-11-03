import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import GoogleLogo from "../../assets/google-logo.svg";
import ImageComp from "../../components/imageComp/imageComp";
import './signup.css'
// import { Link } from "react-router-dom";
class Signup extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     userDetails: {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       isTrue: false
     }

   }
   this.onChangeHandler = this.onChangeHandler.bind(this);
   this.onSubmitHandler = this.onSubmitHandler.bind(this);
   console.log("stage 0: " +  this.state.userDetails.isTrue);
  }
  
  onChangeHandler(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState ({
      userDetails: {
      ...this.state.userDetails,
        [name]: value,
        isTrue: false

      }
    })


  }
  
  onSubmitHandler(e) {
    console.log("clicked stage 2: " + this.state.userDetails.isTrue);
    this.setState ({
      userDetails: {
        ...this.state.userDetails,
        isTrue: true
      }
    })
    console.log("stage 3: " + this.state.userDetails.isTrue);
    e.preventDefault();
  }


  render() {
    console.log("stage 1: " + this.state.userDetails.isTrue);
    return (
      <div>
        <Container>
        <div className="signup-wrapper">
          <Row>
            <Col md={8} lg={8} xl={8} xxl={8} >
              <div className="logo">
                <img src={GoogleLogo} alt="Logo" />
              </div>
              <h1 className="title">Create your Google Account</h1>
              <p className="sub-title">to continue to Gmail</p>
              <Form onSubmit={this.onSubmitHandler}>
                <Row>
                  <Col lg={6}>
                  <Form.Group>
                    <Form.Control 
                      type="text" 
                      placeholder="Firstname" 
                      name="firstName" 
                      value={this.state.userDetails.firstName}
                      onChange={this.onChangeHandler} />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                  <Form.Group >
                    <Form.Control 
                      type="text" 
                      placeholder="Lastname" 
                      name="lastName" 
                      value={this.state.userDetails.lastName}
                      onChange={this.onChangeHandler} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                <Col>
                  <Form.Group >
                    <Form.Label className="floating-label" >@gmail.com</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Username"
                      name="email"
                      value={this.state.userDetails.email}
                      onChange={this.onChangeHandler} />
                    <p className="hint" >You can use letters, numbers & periods</p>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-0">
                  <Col>
                  <Form.Group>
                    <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      name="password" 
                      value={this.state.userDetails.password}
                      onChange={this.onChangeHandler} />
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
                  <button className="next-btn btn btn-primary" type="submit" >Next</button>
                  </Col>
                </Row>
              
                {/* <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.onChangeHandler.bind(this)} />
        </label>
        <input type="submit" value="Submit" /> */}
              </Form>
            </Col>
            <Col  md={4} xl={4} xxl={4}  lg={4} className="img-wrapper">
              <ImageComp />
              <p className="img-text">One account. All of Google working for you.</p>
            </Col>
          </Row>
          { this.state.userDetails.isTrue ? 
              <div>
              <div>Entered First name: {this.state.userDetails.firstName} </div>
              <div>Entered Last name: {this.state.userDetails.lastName} </div>
              <div>Entered E-Mail: {this.state.userDetails.email} </div>
              <div>Entered Password: {this.state.userDetails.password} </div>
              </div> : 
              null 
          }
          
          </div>
        </Container>
      </div>
    );
  }
}
export default Signup;
