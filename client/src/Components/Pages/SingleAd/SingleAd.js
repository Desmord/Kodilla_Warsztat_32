import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { GET_ADD_BY_ID, DELETE_ADD, PATHS, API_URL } from '../../../AppUtilities';
import { useNavigate } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'


import styles from './SingleAd.module.scss'

const SingleAd = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const authors = useSelector(state => state.authors)
    const user = useSelector(state => state.app)


    const [status, setStatus] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [currentAd, setCurrentAd] = useState({});
    const [currentAuthor, setCurrentAuthor] = useState({
        login: ``,
        avatar: ``,
        phoneNumber: ``
    });

    const getData = useCallback(async () => {
        setIsLoading(true)

        const response = await fetch(`${GET_ADD_BY_ID}${id}`, { method: `GET`, mode: `cors`, })
        const data = await response.json();
        const author = authors.filter(aut => aut._id === data.author ? true : false);

        if (author) setCurrentAuthor(author[0])
        setCurrentAd(data)
        setIsLoading(false)

    }, [])

    const displayInfo = (text) => {
        setStatus(text)
        setTimeout(() => {
            setStatus(``)
        }, 3000)
    }

    const handleEdit = () => {
        navigate(`${PATHS.EDIT}${currentAd._id}`, { replace: true })
    }

    const handleRemove = async () => {

        const response = await fetch(`${DELETE_ADD}${currentAd._id}`, { method: `DELETE`, })
        const data = await response.json();

        switch (data.message) {
            case 'Usunięcie obiektu Udane.':
                displayInfo(`success`)
                setTimeout(() => {
                    navigate(`${PATHS.HOME}`, { replace: true })
                }, 3050)
                break;
            case `Bład podczas usuwania. Brak uprawnień.`:
                displayInfo(`Delete error.`)
                break;
            default:
                displayInfo(`Connection Error.`)
                break;
        }
    }

    useEffect(() => {
        getData();
    }, [getData])


    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            {
                isLoading ?
                    <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                        <h3>Loading...</h3>
                    </Row> :
                    <Row className={`col-12 d-flex justify-content-center text-center p-4`}>


                        {status === `success` && (
                            <Alert className={`mt-3 p-2`} variant='success'>
                                <Alert.Heading>Deleting succsessful.</Alert.Heading>
                                <p> Navigate to login page.</p>
                            </Alert>
                        )}

                        {status === `Delete error.` && (
                            <Alert className={`mt-3 p-2`} variant='danger'>
                                <Alert.Heading>Error.</Alert.Heading>
                                <p>Deleting error</p>
                            </Alert>
                        )}

                        {status === `Connection Error.` && (
                            <Alert className={`mt-3 p-2`} variant='danger'>
                                <Alert.Heading>Error.</Alert.Heading>
                                <p>Connection error</p>
                            </Alert>
                        )}


                        <Row className={`col-10 p-3 d-flex  justify-content-center`}>
                            <img
                                src={`${API_URL}uploads/${currentAd.img}`}
                                alt="Zdjecie Ogłoszenia"
                                className={`m-2 ${styles.singleImage}`}></img>
                            <h3>{currentAd.title}</h3>
                            <h6>{currentAd.location} &nbsp;&nbsp; {currentAd.publishDate.substring(0, 10)}</h6>
                            <h5 className={`p-2 mt-2`}>{currentAd.content}</h5>
                        </Row>
                        <Row className={`col-10 p-3 d-flex justify-content-center align-items-center flex-row`}>
                            <Col className={`col-auto p-2`}>
                                <img
                                    src={`${API_URL}uploads/${currentAuthor ? currentAuthor.avatar : ``}`}
                                    alt="avatar"
                                    className={` m-2 ${styles.singleImageAvatar}`}></img>
                            </Col>
                            <Col className={`col-auto p-2`}>
                                <h6>Author:&nbsp;&nbsp; {currentAuthor ? currentAuthor.login : ``}</h6>
                                <h6>Phone:  &nbsp;&nbsp;{currentAuthor ? currentAuthor.phoneNumber : ``}</h6>
                            </Col>
                        </Row>
                        {user.user && currentAuthor && user.user === currentAuthor?.login ?
                            <Row className={`col-5 d-flex justify-content-center flex-row p-4 `}>
                                <Button
                                    onClick={handleEdit}
                                    className={`col-5 fw-bold  p-2 px-4 m-1`}>Edit</Button>
                                <Button
                                    onClick={handleRemove}
                                    className={` col-5 fw-bold  btn-danger p-2 px-4 m-1`}>Delete</Button>
                            </Row>
                            : ``}

                    </Row>
            }
        </div >
    )
}

export default SingleAd;