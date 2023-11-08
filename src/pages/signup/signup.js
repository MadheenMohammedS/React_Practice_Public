import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import GoogleLogo from "../../assets/google-logo.svg";
import ImageComp from "../../components/imageComp/imageComp";
import './signup.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     userDetails: {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       confirmPassword: ''
       
     },
     userDetails2:{},
     errors:'',
     isValid: false,
     isVisible: false
   }
   this.onChangeHandler = this.onChangeHandler.bind(this);
   this.onSubmitHandler = this.onSubmitHandler.bind(this);
   this.eyeToggle = this.eyeToggle.bind(this);
   this.formReset = this.formReset.bind(this);
  }
  
  onChangeHandler(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState ({
      userDetails: {
      ...this.state.userDetails,
        [name]: value
      }
    })
  }
 
  eyeToggle(e) {
    const eyeClass = e.target.classList.contains('eye-off');

    if(!eyeClass === false) {
      this.setState({
        ...this.state,
        isVisible: true
      })
      
    } else {
      this.setState({
        ...this.state,
        isVisible: false
      })

    }
  }

  onSubmitHandler(e) {

    if(this.formValidation()){
      this.setState ({
        userDetails2: {
         ...this.state.userDetails
        },
        isValid: true
      })
      this.formReset();
    }
    e.preventDefault();
  }

  formReset() {
    console.log("form-reset");
    this.setState ({
      ...this.state.userDetails,
      userDetails: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    })
  }
  formValidation(e) {
    let firstNameInput = this.state.userDetails.firstName,
        lastNameInput = this.state.userDetails.lastName,
        passwordInput = this.state.userDetails.password,
        confPasswordInput = this.state.userDetails.confirmPassword,
        emailInput = this.state.userDetails.email,
        regx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g,
        formValid = true,
        errors = {};
        // const regexPassword = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
        // console.log("firstname= " + typeof firstName);
        const notify = () => {
          toast.success("Form Submitted Successfully", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
    if (!firstNameInput) { //First name input field empty
      formValid = false;
      errors["firstName"] = "Please enter firstname.";
    }
    if (!lastNameInput) { //last name input field empty
      formValid = false;
      errors["lastName"] = "Please enter lastname.";
    }
    if (!emailInput) { //Confirm Password input field empty
      formValid = false;
      errors["email"] = "Please enter your Email.";
    }
    if(typeof emailInput !== "") {
      if(!regx.test(emailInput)) {
        formValid = false;
        errors["email"] = "Please enter valid Email ID.";
      }
    }
    if (!passwordInput) { //Password input field empty
      formValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (!confPasswordInput || (typeof passwordInput !== "undefined" && !confPasswordInput)) { //Confirm Password input field empty
      formValid = false;
      errors["confirmPassword"] = "Please enter your confirm password.";
    }
    if(typeof passwordInput !== "undefined") { //Password input field undefined
      if (passwordInput.length < 8) {
        formValid = false;
        errors["password"] = "Please enter minimum 8 characters.";
      }
    }
    // if(!regexPassword.test(passwordInput)) {
    //   console.log("password must have below rules");
    // }
    if(typeof passwordInput !== "undefined" && 
       typeof confPasswordInput !== "undefined") {
      if (passwordInput !== confPasswordInput) {
        formValid = false;
        errors["password"] = "Password and confirm password doesn't match";
      }
    }

    //Form success
    
    this.setState({
      errors: errors
    })

    if(formValid === true) {
      notify();
    }  
    return formValid;
  }
  
 
  render() {

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
              <Form onSubmit={this.onSubmitHandler} noValidate >
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
                <div className="text-danger">{this.state.errors.firstName}</div>
                <div className="text-danger">{this.state.errors.lastName}</div>
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
                    <div className="text-danger">{this.state.errors.email}</div>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-0">
                  <Col>
                  <Form.Group>
                    <Form.Control 
                      type={this.state.isVisible ? "text" : "password"} 
                      placeholder="Password" 
                      name="password" 
                      value={this.state.userDetails.password}
                      onChange={this.onChangeHandler} />
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group >
                    <Form.Control 
                    type={this.state.isVisible ? "text" : "password"} 
                    value={this.state.userDetails.confirmPassword}
                    onChange={this.onChangeHandler}
                    placeholder="Confirm"
                    name="confirmPassword" />
                    </Form.Group>
                  </Col>
                  <Col className="eye-btn">
                  <button 
                  type="button"
                  onClick={this.eyeToggle}  
                  className={this.state.isVisible ? "eye-on" : "eye-off"} 
                  >eye</button>
                  </Col>
                </Row>
                <p className="hint mt-1 mb-5" >Use 8 or more characters with a mix of letters, numbers & symbols</p>
                <div className="text-danger">{this.state.errors.password}</div>
                <div className="text-danger">{this.state.errors.confirmPassword}</div>
                <Row className>
                  <Col className="">
                  <Button variant="link" className="signin-btn">Sign in instead</Button>
                  </Col>
                  <Col className="d-flex justify-content-end">
                  <button className="next-btn btn btn-primary" type="submit" >Next</button>
                  </Col>
                </Row>
              
              </Form>
            </Col>
            <Col  md={4} xl={4} xxl={4}  lg={4} className="img-wrapper">
              <ImageComp />
              <p className="img-text">One account. All of Google working for you.</p>
            </Col>
          </Row>
          <ToastContainer 
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" /> 

          { this.state.isValid ? 
              <div>
              <div>Entered First name: {this.state.userDetails2.firstName} </div>
              <div>Entered Last name: {this.state.userDetails2.lastName} </div>
              <div>Entered E-Mail: {this.state.userDetails2.email} </div>
              <div>Entered Password: {this.state.userDetails2.password} </div>
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
