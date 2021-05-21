import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

export default () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data.authors);
                setAuthor(res.data.authors);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }

    return (
        <div>
            <Link to={"/new"}>Add an author</Link>
            <h3>We have quotes by:</h3>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom} />}
        </div>
    )
}
