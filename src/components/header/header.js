 import React from 'react';
import {Container, Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import gLogo from '../../assets/gmail-logo.jpg'
import  './header.css';
import { Link } from "react-router-dom";
 class HeaderComp extends React.Component {
     render() {
         return (
            <header>
            <Container fluid>
                <Row>
                    <Col xxl={2} xl={2} lg={3}>
                        <Link to="/" className="h-logo">
                            <img src={gLogo} alt="logo" title="logo" />
                        </Link>
                    </Col>
                    <Col xxl={10} xl={10} lg={9} className="search-mail-group">
                        <div className="search-mail-wrapper">
                            <Form>
                                <FormGroup>
                                    <Button className="search-btn"></Button>
                                    <FormControl type="text" placeholder="Search in mail"></FormControl>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="active-dropdown">Active</div>
                        <a href="#" alt="help" className="h-btn help-btn"></a>
                        <a href="#" alt="setting" className="h-btn setting-btn"></a>
                        <a href="#" alt="apps" className="h-btn apps-btn"></a>
                        <a href="#" alt="profile" className="h-btn profile-btn"></a>
                    </Col>
                </Row>
                </Container>
            </header>
        )
     }
 }

 export default HeaderComp;