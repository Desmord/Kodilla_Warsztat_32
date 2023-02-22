import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Header = () => {

    return (
        <div className={`p-0 container bg-primary min-vw-100`}>
            <Row className={`justify-content-between`}>
                <Col className={`col-md-6 col-sm-3  p-3`}>
                    <Button className={`btn-outline-light fw-bold p-3 pb-2 pt-2 text-nowrap`}>Home</Button>
                </Col>
                <Col className={`col-auto p-3`}>
                    <Row className={`justify-content-end`} >
                        <Col>
                            <Button className={`fw-bold p-3 pb-2 pt-2 text-nowrap`}>Sign In</Button>
                        </Col>
                        <Col>
                            <Button className={`fw-bold p-3 pb-2 pt-2 text-nowrap`}>Sign Up</Button>
                        </Col>
                        <Col>
                            <Button className={`fw-bold p-3 pb-2 pt-2 text-nowrap`}>Sign Out</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Header;