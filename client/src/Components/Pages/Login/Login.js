import { useState } from 'react';
import { LOGIN_USER_URL, PATHS } from '../../../AppUtilities'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setAppUser } from '../../../Redux/AppState/AppSlice';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [status, setStatus] = useState()
    const [login, setLogin] = useState(``);
    const [password, setPassword] = useState(``);

    const displayInfo = (text) => {
        setStatus(text)
        setTimeout(() => {
            setStatus(``)
        }, 3000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login,
                password
            })
        }

        const response = await fetch(`${LOGIN_USER_URL}`, options)
        const data = await response.json();

        switch (data.message) {
            case 'Logowanie poprawne.':
                dispatch(setAppUser({ user: login, id: data.id }));
                displayInfo(`success`)
                setTimeout(() => {
                    navigate(`${PATHS.HOME}`, { replace: true })
                }, 3050)
                break;
            case `Zły login lub hasło.`:
                displayInfo(`loginPasswordError`)
                break;
            default:
                displayInfo(`error`)
                break;
        }

    }

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>

            {status === `success` && (
                <Alert className={`mt-3 p-2`} variant='success'>
                    <Alert.Heading>Login sucsessful.</Alert.Heading>
                    <p> Navigate to login page.</p>
                </Alert>
            )}

            {status === `loginPasswordError` && (
                <Alert className={`mt-3 p-2`} variant='danger'>
                    <Alert.Heading>Error.</Alert.Heading>
                    <p>Worng login or password.</p>
                </Alert>
            )}

            {status === `error` && (
                <Alert className={`mt-3 p-2`} variant='danger'>
                    <Alert.Heading>Connection error.</Alert.Heading>
                </Alert>
            )}

            <Form
                onSubmit={(e) => handleSubmit(e)}
                className={`col-12 p-3 mt-2 d-flex justify-content-center  align-items-center flex-column`}>
                <Form.Group className={`border rounded col-10 col-10 col-sm-8 col-md-6 col-lg-4 p-3`}>
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        placeholder='Login'
                        type="text"
                        value={login}
                        onChange={e => setLogin(e.target.value)} />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button
                    onClick={(e) => handleSubmit(e)}
                    className={`fw-bold  p-2 px-4 m-3`}>Sign In</Button>
            </Form>
        </div>
    )
}

export default Login;