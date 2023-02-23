import React, { useState } from "react";
import DatePicker from "react-datepicker";

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import "react-datepicker/dist/react-datepicker.css";

const Add = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={`container d-flex flex-column justify-content-center  align-items-center`}>
            <h3 className={`p-3`}>Add new add</h3>
            <Row className={`col-12 p-3 mt-5`}>
                <form
                    // onSubmit={(e) => handleSubmit(e)}
                    className={` col-12 d-flex justify-content-center  align-items-center flex-column`}>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Title"
                    // value={searchedValue}
                    // onChange={e => setSearchedValue(e.target.value)}
                    ></input>
                    <textarea
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Contntet"
                        type="textarea"
                    // value={searchedValue}
                    // onChange={e => setSearchedValue(e.target.value)}
                    ></textarea>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Price"
                    // value={searchedValue}
                    // onChange={e => setSearchedValue(e.target.value)}
                    ></input>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Location"
                    // value={searchedValue}
                    // onChange={e => setSearchedValue(e.target.value)}
                    ></input>
                    <input
                        className={`border p-2 col-8 col-sm-8 col-md-6 m-3`}
                        placeholder="Image"
                    // value={searchedValue}
                    // onChange={e => setSearchedValue(e.target.value)}
                    ></input>
                    <Row>
                        <DatePicker
                            selected={startDate}
                            // selected={date}
                            // onSelect={handleDateSelect} //when day is clicked
                            // onChange={handleDateChange} //only when value has changed
                            onChange={(date) => setStartDate(date)} />
                    </Row>
                    <Button
                        //  onClick={(e) => handleSubmit(e)} 
                        className={`fw-bold  p-2 px-4 m-3`}>Add</Button>
                </form>
            </Row>
        </div>
    )
}

export default Add;