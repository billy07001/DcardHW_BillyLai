import { render } from "@testing-library/react";
import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap"

import '../style/App.css'
import { scenicSpot } from "./scenicSpot/scenicSpot"
import { Taipei } from "./scenicSpot/Taipei/Taipei"

function App() {
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <h2 color="white">Welcome to the 交通部觀光景點</h2>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Container>
                                <Row>
                                    <Col><Nav.Link><Link to="/scenicSpot">全部景點列表</Link></Nav.Link></Col>
                                    <Col>
                                        <NavDropdown title="縣市景點列表" id="basic-nav-dropdown">
                                            <NavDropdown.Item><Link to="/scenicSpot/Taipei">台北市</Link></NavDropdown.Item>
                                            <NavDropdown.Item>Another action</NavDropdown.Item>
                                            <NavDropdown.Item>Something</NavDropdown.Item>
                                        </NavDropdown>
                                    </Col>
                                </Row>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Route exact path="/scenicSpot" component={scenicSpot} />
                <Route exact path="/scenicSpot/Taipei" component={Taipei} />
            </Navbar>
        </BrowserRouter >
    );
}

export default App;