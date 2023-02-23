import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {

    return (
        <div className={`p-0 container bg-primary min-vw-100`}>
            <Row className={`justify-content-between`}>
                <Col className={`col-md-6 col-sm-3  p-3`}>
                    <Navbar
                        bg="primary" variant="dark" expand="lg"
                        className={`fw-bold col-auto d-flex justify-content-between rounded`}>
                        <Nav>
                            <Nav.Link className={`px-3 border border-ligh rounded`} as={NavLink} to="/">Home</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Navbar
                    bg="primary" variant="dark" expand="lg"
                    className={`fw-bold col-auto d-flex justify-content-between p-3  rounded`}>
                    <Nav>
                        <Nav.Link className={`px-2 `} as={NavLink} to="/login">Sign In</Nav.Link>
                        <Nav.Link className={`px-2 `} as={NavLink} to="/register">Sign Up</Nav.Link>
                        <Nav.Link className={`px-2 `} as={NavLink} to="/jaskiAdres">Sign Out</Nav.Link>
                    </Nav>
                </Navbar>
            </Row>
        </div>
    )
}

export default Header;