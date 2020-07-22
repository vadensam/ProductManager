import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {
    const {id} = props
    const [product, setProduct] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {setProduct(res.data)})
    }, [])
  
    return(
        <div>
            <h1>{product.title} <p><Link to={`/products/${id}/edit`}>Edit</Link></p></h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.desc}</p>
        </div>

    )






}