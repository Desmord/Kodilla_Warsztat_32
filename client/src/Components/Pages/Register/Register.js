import { useState } from 'react';
import { REGISTER_USER_URL, PATHS  } from '../../../AppUtilities'
import { useNavigate } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Register = () => {

    const navigate = useNavigate();

    const [infoText, setInfoText] = useState(``);
    const [login, setLogin] = useState(``);
    const [password, setPassword] = useState(``);
    const [avatar, setAvatar] = useState(null);
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


        const fd = new FormData();
        fd.append(`login`, login);
        fd.append(`password`, password);
        fd.append(`phoneNumber`, phoneNumber);
        fd.append(`avatar`, avatar);

        const options = {
            method: `post`,
            body: fd,
        }

        const response = await fetch(`${REGISTER_USER_URL}`, options)
        const data = await response.json();

        if (data.message === `Użytkownik zajestrowany.`) {

            displayInfo(`User registred. Navigate to login page.`)
            setTimeout(() => {
                navigate(`${PATHS.LOGIN}`, { replace: true })
            }, 3050)

        }

        if (data.message === `User exists.`) {
            displayInfo(data.message)
        }

    }

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <Row className={`col-12 p-3 mt-4 text-danger text text-center`}><h3>{infoText}</h3></Row>
            <Row className={`col-12 p-3`}>
                <Form
                    onSubmit={(e) => handleSubmit(e)}
                    className={`col-12 d-flex justify-content-center  align-items-center flex-column`}>

                    <Form.Group className={`border rounded col-10 col-10 col-sm-8 col-md-6 col-lg-4 p-3`}>
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            type="text"
                            value={login}
                            onChange={e => setLogin(e.target.value)} />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)} />
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={e => setAvatar(e.target.files[0])}
                        />
                    </Form.Group>
                    <Button
                        onClick={(e) => handleSubmit(e)}
                        className={`fw-bold  p-2 px-4 m-3`}>Register</Button>
                </Form>
            </Row>
        </div >
    )
}

export default Register;