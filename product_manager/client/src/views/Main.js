import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
        .then(res => {
            console.log(res.data.products);
            setProduct(res.data.products);
            setLoaded(true)
        })
    }, [product])

    const addProduct = (newProduct) => {
        setProduct([... product, newProduct])
    }

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    return (
        <div>
            <ProductForm addProduct={addProduct}/>
            <hr/>
            <h3>Product List:</h3>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}