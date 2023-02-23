import Row from 'react-bootstrap/Row';

const NotFound = () => {


    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                <h3>Page Not Found</h3>
            </Row>
        </div>
    )
}

export default NotFound;