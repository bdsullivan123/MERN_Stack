import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new/', {
            name
        })
            .then(res => {
                if (res.data.author) {
                    console.log(res);
                    navigate("/");
                } else {
                    setErrors(res.data.name);
                    console.log(res.data);
                }
            })
            .catch(err => {
            })
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                {errors? <p>{errors.message}</p> : ""}
                <p>
                    <label>Name: </label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <input className="btn btn-secondary" type="Submit" />
            </form>
            <button id="cancelButton" className="btn btn-dark" onClick={()=> navigate("/")}>Cancel</button>
        </div>
    )
}
