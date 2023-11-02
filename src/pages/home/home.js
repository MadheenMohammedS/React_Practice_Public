import React from 'react';
import HeaderComp from '../../components/header/header.js';
import {Container, Row, Col } from 'react-bootstrap';
import './home.css';
class Home extends React.Component {
    render() {
        return (
            <div className="home-bg">
                <HeaderComp />
                <Container fluid className="home-wrapper">
                    <Row>
                        <Col xxl={2} xl={2} lg={3} className="left-panel-group">
                            <a href="#" alt="Compose" title="Compose" className="btn-compose btn btn-primary">Compose</a>
                            <ul className="left-panel-list">
                                <li className="active"><a href="#" alt="Inbox" title="Inbox" className="btn-inbox btn btn-link">Inbox</a></li>
                                <li><a href="#" alt="Starred" title="Starred" className="btn-starred btn btn-link">Starred</a></li>
                                <li><a href="#" alt="Snoozed" title="Snoozed" className="btn-snooze btn btn-link">Snoozed</a></li>
                                <li><a href="#" alt="Important" title="Important" className="btn-important btn btn-link">Important</a></li>
                                <li><a href="#" alt="Sent" title="Sent" className="btn-sent btn btn-link">Sent</a></li>
                                <li><a href="#" alt="Drafts" title="Drafts" className="btn-drafts btn btn-link">Drafts</a></li>
                                <li><a href="#" alt="More" title="More" className="btn-more btn btn-link">More</a></li>
                            </ul>
                        </Col>
                        <Col xxl={10} xl={10} lg={9} >
                            <div className="home-content-wrapper">
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;