import { useState } from 'react';
import { REGISTER_USER_URL } from '../../../AppUtilities'

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Register = () => {

    const [infoText, setInfoText] = useState(``);
    const [login, setLogin] = useState(``);
    const [password, setPassword] = useState(``);
    const [avatar, setAvatar] = useState(``);
    const [phoneNumber, setPhoneNumber] = useState(``);

    const displayInfo = (text) => {
        setInfoText(text)
        setTimeout(() => {
            setInfoText(``)
        }, 3000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!login) { displayInfo(`Empty login`); return 0; }
        if (!password) { displayInfo(`Empty password`); return 0; }
        if (!avatar) { displayInfo(`Empty avatar`); return 0; }
        if (!phoneNumber) { displayInfo(`Empty phone number`); return 0; }


        const response = await fetch(`${REGISTER_USER_URL}`, {
            method: `POST`,
            mode: `cors`,
            body: JSON.stringify({ login, password, avatar, phoneNumber }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();

        if (data.message === `Użytkownik zajestrowany.`) {
            console.log(`Udało Się`)
        }

        if (data.message === `Użytkownik istnieje.`) {
            displayInfo(data.message)
        }

    }

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <Row className={`col-12 p-3 mt-4 text-danger text text-center`}><h3>{infoText}</h3></Row>
            <Row className={`col-12 p-3`}>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className={`col-12 d-flex justify-content-center  align-items-center flex-column`}>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    ></input>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    ></input>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Avatar"
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                    ></input>
                    <Button
                        onClick={(e) => handleSubmit(e)}
                        className={`fw-bold  p-2 px-4 m-3`}>Register</Button>
                </form>
            </Row>
        </div>
    )
}

export default Register;