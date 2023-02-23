import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const [infoText, setInfoText] = useState(``);

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <Row className={`col-12 p-3 mt-4 text-danger text text-center`}><h3>{infoText}</h3></Row>
            <Row className={`col-12 p-3`}>
                <form
                    // onSubmit={(e) => handleSubmit(e)}
                    className={`col-12 d-flex justify-content-center  align-items-center flex-column`}>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Login"
                    // value={searchedValue}
                    // onChange={e => setSearchedValue(e.target.value)}
                    ></input>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Password"
                        type="password"
                    // value={searchedValue}
                    // onChange={e => setSearchedValue(e.target.value)}
                    ></input>
                    <Button
                        //  onClick={(e) => handleSubmit(e)} 
                        className={`fw-bold  p-2 px-4 m-3`}>LogIn</Button>
                </form>
            </Row>
        </div>
    )
}

export default Login;