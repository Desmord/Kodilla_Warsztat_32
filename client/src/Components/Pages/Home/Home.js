import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './Home.module.scss';

const Home = () => {

    const getAds = (ads) => {
        let adsElements = [];

        ads.forEach((element, index) => {
            adsElements.push(
                <Col key={index} className={`col-8 col-sm-5 col-md-5 col-lg-3 p-2 m-2 rounded  border bg-primary fw-bold text-white`}>
                    <div className={`d-flex flex-column justify-content-center  align-items-center`}>
                        <Col className='p-2'>{element.title}</Col>
                        <img
                            src="..."
                            alt="..."
                            className={`m-2 ${styles.image}`}></img>
                        <Col className='p-2'>{element.localization}</Col>
                        <Button className={`mt-3`}>Read more</Button>
                    </div>
                </Col >
            )
        });

        return adsElements

    }

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
            <Row className={`col-12 col-sm-12 col-md-12 col-lg-10 d-flex justify-content-center mt-4`}>
                {getAds([{
                    title: `Tytuł 1`,
                    img: `asfd`,
                    localization: `Jaowrynz`
                },
                {
                    title: `Tytuł 2`,
                    img: `asd`,
                    localization: `Jaowrynzaaa`
                },
                {
                    title: `Tytuł 3`,
                    img: `asd`,
                    localization: `Jaowrynz bbb`
                },
                {
                    title: `Tytuł 4`,
                    img: `asd`,
                    localization: `Jaowrynz Slaska`
                },])}
            </Row>
        </div>
    )
}

export default Home;