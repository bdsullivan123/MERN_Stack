import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router'
export default props => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {
            console.log(res.data);
            setProduct(res.data.product)}
            )}, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res => {
                navigate('/');
            })
    }

    return (
        <div>
            <p>{product.title}</p>
            <p>Price: ${product.price}.00</p>
            <p>Description: {product.description}</p>
            <Link to={`/${product._id}/edit`}>
                Edit
            </Link>
            <button onClick={(e) => {deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}