import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap"

import '../style/App.css'
import { scenicSpot } from "./scenicSpot/scenicSpot"
import { Taipei } from "./scenicSpot/Taipei/Taipei"
import { ChanghuaCounty } from "./scenicSpot/ChanghuaCounty/ChanghuaCounty"
import { Chiayi } from "./scenicSpot/Chiayi/Chiayi"
import { ChiayiCounty } from "./scenicSpot/ChiayiCounty/ChiayiCounty"
import { Hsinchu } from "./scenicSpot/Hsinchu/Hsinchu"
import { HsinchuCounty } from "./scenicSpot/HsinchuCounty/HsinchuCounty"
import { HualienCounty } from "./scenicSpot/HualienCounty/HualienCounty"
import { Kaohsiung } from "./scenicSpot/Kaohsiung/Kaohsiung"
import { Keelung } from "./scenicSpot/Keelung/Keelung"
import { KinmenCounty } from "./scenicSpot/KinmenCounty/KinmenCounty"
import { LienchiangCounty } from "./scenicSpot/LienchiangCounty/LienchiangCounty"
import { MiaoliCounty } from "./scenicSpot/MiaoliCounty/MiaoliCounty"
import { NantouCounty } from "./scenicSpot/NantouCounty/NantouCounty"
import { NewTaipei } from "./scenicSpot/NewTaipei/NewTaipei"
import { PenghuCounty } from "./scenicSpot/PenghuCounty/PenghuCounty"
import { PingtungCounty } from "./scenicSpot/PingtungCounty/PingtungCounty"
import { Taichung } from "./scenicSpot/Taichung/Taichung"
import { Tainan } from "./scenicSpot/Tainan/Tainan"
import { TaitungCounty } from "./scenicSpot/TaitungCounty/TaitungCounty"
import { Taoyuan } from "./scenicSpot/Taoyuan/Taoyuan"
import { YilanCounty } from "./scenicSpot/YilanCounty/YilanCounty"
import { YunlinCounty } from "./scenicSpot/YunlinCounty/YunlinCounty"



function App() {
    return (
        <Container>
            <BrowserRouter>
                <Row>
                    <Navbar bg="light" expand="lg" variant="light">
                        <Col><Link to="/"><h2 color="white">Welcome to the 交通部觀光景點</h2></Link></Col>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Col><Nav.Link><Link to="/scenicSpot">全部景點列表</Link></Nav.Link></Col>
                                <Col><NavDropdown title="縣市景點列表" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to="/scenicSpot/Taipei">台北市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/NewTaipei">新北市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/Taoyuan">桃園市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/Taichung">台中市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/Tainan">台南市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/Kaohsiung">高雄市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/Keelung">基隆市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/Hsinchu">新竹市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/HsinchuCounty">新竹縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/MiaoliCounty">苗栗縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/ChanghuaCounty">彰化縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/NantouCounty">南投縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/YunlinCounty">雲林縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/ChiayiCounty">嘉義縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/Chiayi">嘉義市</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/PingtungCounty">屏東縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/YilanCounty">宜蘭縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/HualienCounty">花蓮縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/TaitungCounty">台東縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/KinmenCounty">金門縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/PenghuCounty">澎湖縣</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/scenicSpot/LienchiangCounty">連江縣</Link></NavDropdown.Item>
                                </NavDropdown></Col>
                            </Nav>
                        </Navbar.Collapse>
                        <Route exact path="/" component={this} />
                        <Route exact path="/scenicSpot" component={scenicSpot} />
                        <Route exact path="/scenicSpot/Taipei" component={Taipei} />
                        <Route exact path="/scenicSpot/NewTaipei" component={NewTaipei} />
                        <Route exact path="/scenicSpot/Taoyuan" component={Taoyuan} />
                        <Route exact path="/scenicSpot/ChanghuaCounty" component={ChanghuaCounty} />
                        <Route exact path="/scenicSpot/Chiayi" component={Chiayi} />
                        <Route exact path="/scenicSpot/ChiayiCounty" component={ChiayiCounty} />
                        <Route exact path="/scenicSpot/Hsinchu" component={Hsinchu} />
                        <Route exact path="/scenicSpot/HsinchuCounty" component={HsinchuCounty} />
                        <Route exact path="/scenicSpot/HualienCounty" component={HualienCounty} />
                        <Route exact path="/scenicSpot/Kaohsiung" component={Kaohsiung} />
                        <Route exact path="/scenicSpot/Keelung" component={Keelung} />
                        <Route exact path="/scenicSpot/KinmenCounty" component={KinmenCounty} />
                        <Route exact path="/scenicSpot/LienchiangCounty" component={LienchiangCounty} />
                        <Route exact path="/scenicSpot/MiaoliCounty" component={MiaoliCounty} />
                        <Route exact path="/scenicSpot/NantouCounty" component={NantouCounty} />
                        <Route exact path="/scenicSpot/PenghuCounty" component={PenghuCounty} />
                        <Route exact path="/scenicSpot/PingtungCounty" component={PingtungCounty} />
                        <Route exact path="/scenicSpot/Taichung" component={Taichung} />
                        <Route exact path="/scenicSpot/Tainan" component={Tainan} />
                        <Route exact path="/scenicSpot/TaitungCounty" component={TaitungCounty} />
                        <Route exact path="/scenicSpot/YilanCounty" component={YilanCounty} />
                        <Route exact path="/scenicSpot/YunlinCounty" component={YunlinCounty} />
                    </Navbar>
                </Row>
            </BrowserRouter >
        </Container>
    );
}

export default App;