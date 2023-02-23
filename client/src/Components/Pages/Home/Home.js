import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setAds } from '../../../Redux/AdsState/AdsSlice';
import { PATHS } from '../../../AppUtilities';
import { GET_ADS_URL } from '../../../AppUtilities';

import Ads from '../../Features/Ads/Ads';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {

    const navigate = useNavigate();

    const ads = useSelector(state => state.ads);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [searchedValue, setSearchedValue] = useState(``);

    const getData = useCallback(async () => {

        if (ads && ads.length) {
            setIsLoading(false)
            return 0
        }

        setIsLoading(true)

        const response = await fetch(GET_ADS_URL, { method: `GET`, })
        const data = await response.json();

        dispatch(setAds(data))

        setIsLoading(false)

    }, [ads, dispatch])

    useEffect(() => {
        getData();
    }, [getData])


    const handleSubmit = async (e) => {
        console.log(`ehej`)
        e.preventDefault();
        navigate(`${PATHS.SEARCH}${searchedValue}`, { replace: true })



        // const response = await fetch(`http://localhost:8000/api/ads`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: `Jakis Tytuł `,
        //         content: `asdkjfhasdlkj fasdlkjasdh lkjfa hlafsdhkasdfsadf`,
        //         publishDate: `2023-02-23`,
        //         price: 100,
        //         location: `Jaworzyna śląska`,
        //         author: `63ed05f5e0179212c4589df5`
        //     })
        // })

        // const data = await response.json();

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