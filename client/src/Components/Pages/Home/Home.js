import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setAds } from '../../../Redux/AdsState/AdsSlice';
import { setAuthors } from '../../../Redux/AuthorsState/AuthorsSlice';
import { PATHS } from '../../../AppUtilities';
import { GET_ADS_URL, GET_USERS_URL } from '../../../AppUtilities';

import Ads from '../../Features/Ads/Ads';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {

    const navigate = useNavigate();

    const ads = useSelector(state => state.ads);
    const authors = useSelector(state => state.authors);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [searchedValue, setSearchedValue] = useState(``);

    const getData = useCallback(async () => {

        if (ads && ads.length && authors && authors.length) {
            setIsLoading(false)
            return 0
        }

        setIsLoading(true)

        const response = await fetch(GET_ADS_URL, { method: `GET`, })
        const data = await response.json();

        const responseAuthors = await fetch(GET_USERS_URL, { method: `GET` });
        const dataAuthors = await responseAuthors.json();

        dispatch(setAds(data))
        dispatch(setAuthors(dataAuthors))

        setIsLoading(false)

    }, [ads, dispatch, authors])

    useEffect(() => {
        getData();
    }, [getData])


    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`${PATHS.SEARCH}${searchedValue}`, { replace: true })
    }

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <Row className={`col-12 p-3 mt-3`}>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className={`col-12 d-flex justify-content-center`}>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Search"
                        value={searchedValue}
                        onChange={e => setSearchedValue(e.target.value)}
                    ></input>
                    <Button onClick={(e) => handleSubmit(e)} className={`fw-bold  p-2 m-3`}>Search</Button>
                </form>
            </Row>
            {
                isLoading ?
                    <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                        <h3>Loading...</h3>
                    </Row> :
                    <Row className={`col-12 col-sm-12 col-md-12 col-lg-10 d-flex justify-content-center mt-4`}>
                        <Ads ads={ads} />
                    </Row>
            }

        </div>
    )
}

export default Home;