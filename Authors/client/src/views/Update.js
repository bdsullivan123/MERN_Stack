import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [name, setName] = useState("");
    const [exists, setExists] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.author.name);
                setExists(true);
            })
            .catch(res => {
                // return (
                //     <></>
                // )
            })
    }, [])


    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {
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
    }

    return (
        <div>
            {exists ?
                <div>
                    <Link to={"/"}>Home</Link>
                    <h3>Edit this author</h3>
                    <form onSubmit={updateAuthor}>
                    {errors? <p>{errors.message}</p> : ""}
                        <p>
                            <label>Name</label><br />
                            <input type="text"
                                name="name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }} />
                        </p>
                        <input className="btn btn-secondary" type="submit" />
                    </form>
                </div>
                :
                <div>
                    <p id="errorParagraph">We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
                    <Link className="btn btn-primary" to={"/new"}>New Author</Link>
                </div>
            }
        </div>
    )
}
