import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import Ads from '../../Features/Ads/Ads';

import Row from 'react-bootstrap/Row';

const SearchedAds = () => {

    const ads = useSelector(state => state.ads)

    const { searchPhrase } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [searchedAds, setSearchedAds] = useState([]);

    const getData = useCallback(async () => {

        if (searchedAds && searchedAds.length) { return 0 }

        setIsLoading(true)

        let sAdds = [];

        ads.forEach(ad => {
            const title = ad.title;
            const regex = new RegExp(searchPhrase, `gim`)

            if (title.match(regex)) sAdds.push(ad)

        });

        setSearchedAds(sAdds)

        setIsLoading(false)

    }, [searchPhrase, ads])

    useEffect(() => {
        getData();
    }, [getData])


    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                <h4>Searched phrase: {searchPhrase}</h4>
            </Row>
            {
                isLoading ?
                    <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                        <h3>Loading...</h3>
                    </Row> :
                    <Row className={`col-12 col-sm-12 col-md-12 col-lg-10 d-flex justify-content-center mt-4`}>
                        <Ads ads={searchedAds} />
                    </Row>
            }
        </div>
    )
}

export default SearchedAds;