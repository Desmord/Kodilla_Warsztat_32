import React, { useState, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import { useParams } from 'react-router';
import { GET_ADD_BY_ID, PUT_ADD } from "../../../AppUtilities";

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import "react-datepicker/dist/react-datepicker.css";

const Edit = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [publishDate, setPublishDate] = useState(new Date());
    const [title, setTitle] = useState(``);
    const [content, setContent] = useState(``);
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState(``);
    const [img, setImg] = useState(null);
    const [infoText, setInfoText] = useState(``);
    const [author, setAuthor] = useState(``);

    const { id } = useParams();

    const displayInfo = (text) => {
        setInfoText(text)
        setTimeout(() => {
            setInfoText(``)
        }, 3000)
    }

    const setData = useCallback(async () => {
        setIsLoading(true)

        const response = await fetch(`${GET_ADD_BY_ID}${id}`, { method: `GET`, mode: `cors`, })
        const data = await response.json();

        setTitle(data.title)
        setContent(data.content)
        setPrice(data.price)
        setLocation(data.location)
        setPublishDate(new Date(data.publishDate))
        setImg(data.img)
        setAuthor(data.author)

        setIsLoading(false)

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) { displayInfo(`Empty title.`); return 0; }
        if (title.length < 10) { displayInfo(`Title to short.`); return 0; }
        if (!content) { displayInfo(`Empty content.`); return 0; }
        if (content.length < 30) { displayInfo(`Content to short.`); return 0; }
        if (!price) { displayInfo(`Worng price.`); return 0; }
        if (!location) { displayInfo(`Empty location.`); return 0; }
        if (!img) { displayInfo(`Empty img.`); return 0; }

        const fd = new FormData();
        fd.append(`title`, title);
        fd.append(`content`, content)
        fd.append(`publishDate`, publishDate)
        fd.append(`price`, price)
        fd.append(`location`, location)
        fd.append(`img`, img);
        fd.append(`author`, author)
        fd.append(`id`, id)

        const options = {
            method: `post`,
            body: fd,
            credentials: 'include'
        }

        console.log(`${PUT_ADD}`)
        const response = await fetch(`${PUT_ADD}`, options)
        const data = await response.json();

        console.log(data)

        // switch (data.message) {
        //     case 'Dodanie nowego ogłosznia poprawne.':
        //         displayInfo(`Add added sucessfull. Navigate to home page.`)
        //         setTimeout(() => {
        //             navigate(`${PATHS.HOME}`, { replace: true })
        //         }, 3050)
        //         break;
        //     case 'Brak zdjęcia.':
        //         displayInfo(`Empty image`)
        //         break;
        //     default:
        //         console.log(data)
        //         displayInfo(`Connection Error.`)
        //         break;
        // }

    }


    useEffect(() => {
        setData();
    }, [setData])

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`} >
            {
                isLoading ?
                    <Row className={`col-12 d-flex justify-content-center text-center p-4`}>
                        <h3>Loading...</h3>
                    </Row> :
                    <>
                        <h3 className={`p-3`}>Edit add</h3>
                        <Row className={`col-12 p-3 mt-4 text-danger text text-center`}><h3>{infoText}</h3></Row>
                        <Form
                            onSubmit={(e) => handleSubmit(e)}
                            className={`col-12 d-flex justify-content-center  align-items-center flex-column`}>
                            <Form.Group className={`border rounded col-10 col-10 col-sm-8 col-md-6 col-lg-4 p-3`}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    placeholder='Title'
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)} />
                                <Form.Label>Content</Form.Label>
                                <textarea
                                    className={`border p-2 col-12 `}
                                    placeholder="Content"
                                    type="textarea"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}></textarea>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    placeholder='Price'
                                    type="text"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)} />
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    placeholder='Location'
                                    type="text"
                                    value={location}
                                    onChange={e => setLocation(e.target.value)} />
                                <Row className={`p-3`}>
                                    <DatePicker
                                        selected={publishDate}
                                        onChange={(date) => setPublishDate(date)}
                                        onSelect={(date) => setPublishDate(date)} />
                                </Row>
                                <Form.Control
                                    type="file"
                                    onChange={e => setImg(e.target.files[0])} />
                            </Form.Group>
                            <Button
                                onClick={(e) => handleSubmit(e)}
                                className={`fw-bold  p-2 px-4 m-3`}>Edit Ad</Button>
                        </Form>
                    </>

            }


        </div >
    )
}

export default Edit;