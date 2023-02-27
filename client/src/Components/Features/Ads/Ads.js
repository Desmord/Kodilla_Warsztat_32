import { useNavigate } from 'react-router-dom';
import { PATHS, API_URL } from '../../../AppUtilities';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './Ads.module.scss';


const Ads = ({ ads }) => {

    const navigate = useNavigate();

    const handleClick = (ad) => {
        navigate(`${PATHS.SINGLE_AD}${ad._id}`, { replace: true })
    }

    const createAds = (ads) => {
        let adsElements = [];

        ads.forEach((element, index) => {
            adsElements.push(
                <Col key={element._id} className={`col-8 col-sm-5 col-md-5 col-lg-3 p-2 m-2 rounded  border bg-primary fw-bold text-white`}>
                    <div className={`d-flex flex-column justify-content-center  align-items-center`}>
                        <Col className='p-2'>{element.title}</Col>
                        <img
                            src={`${API_URL}uploads/${element.img}`}
                            alt="..."
                            className={`m-2 ${styles.image}`}></img>
                        <Col className='p-2'>{element.location}</Col>
                        <Button onClick={() => handleClick(element)} className={`mt-3`}>Read more</Button>
                    </div>
                </Col >
            )
        });

        return adsElements

    }

    return (
        <>
            {createAds(ads)}
        </>
    )
}


export default Ads