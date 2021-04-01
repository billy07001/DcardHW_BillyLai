import React from 'react';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import "../style/nav.css";

function Topnav(){

        return (
            <Navbar bg="light" expand="lg" variant="light">
            <Container>
            <h2 color="white">Welcome to the 交通部觀光景點</h2>
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
            </Container>
            </Navbar>
        );
}

export default Topnav;