import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setAds } from '../../../Redux/AdsState/AdsSlice';
// import { GET_ADS_URL } from '../../../AppUtilities';

import Ads from '../../Features/Ads/Ads';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {

    const ads = useSelector(state => state.ads);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const getData = useCallback(async () => {

        if (ads && ads.length) { return 0 }

        setIsLoading(true)

        // const response = await fetch(GET_ADS_URL, { method: `GET`, })
        // const data = await response.json();

        // dispatch(setAds(data)),
        dispatch(setAds([{
            _id: "63ed062ce0179212c4589df7",
            author: "63ed05b2e0179212c4589df4",
            content: "Treść 1",
            img: "img1",
            location: "Lokacja 1",
            price: 100,
            publishDate: "2023-02-15T00:00:00.000Z",
            title: "Tytuł 1"
        }]))
        setIsLoading(false)

    }, [ads, dispatch])

    useEffect(() => {
        getData();
    }, [getData])


    const handleSubmit = () => {
        console.log(`Szukamy`)
    }

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <Row className={`col-12 p-3 mt-3`}>
                <form
                    onSubmit={handleSubmit}
                    className={`col-12 d-flex justify-content-center`}>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Search"
                    // value={searchText}
                    // onChange={e => setSearchText(e.target.value)}
                    ></input>
                    <Button onClick={handleSubmit} className={`fw-bold  p-2 m-3`}>Search</Button>
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