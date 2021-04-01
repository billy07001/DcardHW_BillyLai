import React from 'react';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import "../style/nav.css";

function Topnav(){

        return (
            <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
            <Container>
            <Row>
            <Col>
            <h2>Welcome to the 交通部觀光景點</h2>
            </Col>
            <Col>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Container>
                <Row>
                <Col><Nav.Link href="#home">全部景點列表</Nav.Link></Col>
                <Col><Nav.Link href="#link">縣市景點列表</Nav.Link></Col>
                </Row>
                </Container>
                </Nav>
            </Navbar.Collapse>
            </Col>
            </Row>
            </Container>
            </Navbar>
        );
}

export default Topnav;