import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { GET_ADD_BY_ID } from '../../../AppUtilities';


import Row from 'react-bootstrap/Row';

import styles from './SingleAd.module.scss'

const SingleAd = () => {

    const { id } = useParams();
    const authors = useSelector(state => state.authors)
    const user = useSelector(state => state.app)

    const [isLoading, setIsLoading] = useState(true);
    const [currentAd, setCurrentAd] = useState({});
    const [currentAuthor, setCurrentAuthor] = useState({
        login: ``,
        avatar: `ava`,
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

    useEffect(() => {
        getData();
    }, [getData])


    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            {
                isLoading ?
                    <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                        <h3>Loading...</h3>
                    </Row> : <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                        <h3>{currentAd.title}</h3>
                        <img
                            src={currentAd.img}
                            alt="Zdjecie Ogłoszenia"
                            className={`m-2 ${styles.singleImage}`}></img>
                        <h4>{currentAd.location} &nbsp;&nbsp; {currentAd.publishDate.substring(0, 10)}</h4>
                        <h5 className={`p-2`}>{currentAd.content}</h5>
                        <Row className={`col-12 d-flex justify-content-center text-center p-4 `}>
                            <h4>Author: {currentAuthor.login}</h4>
                            <h5>Phone: {currentAuthor.phoneNumber}</h5>
                            <img
                                src={currentAuthor.avatar}
                                alt="avatar"
                                className={`m-2 ${styles.singleImage}`}></img>
                        </Row>
                        {user.user && currentAuthor && user.user === currentAuthor?.login ?
                            `Edytujemy i usuwamy` :
                            ``}
                    </Row>
            }
        </div>
    )
}

export default SingleAd;