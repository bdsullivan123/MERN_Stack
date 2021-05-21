import { Link } from '@reach/router';
import axios from 'axios';
import React from 'react'

export default props => {
    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then(res => {
                removeFromDom(authorId);
            })
    }

    return (
        <div id="wrapper">
            <table id="mainTable" className="table table-hover">
                <tbody>
                    <tr>
                        <th><h3>Author</h3></th>
                        <th><h3>Actions Available</h3></th>
                    </tr>
                    {props.author.map((author, i) => {
                        return (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link id="editButton" className="btn btn-secondary" to={`/edit/${author._id}`}>Edit</Link>
                                    <button className="btn btn-dark" onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
