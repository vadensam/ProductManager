import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {setProduct(res.data)})
    }, [])
  
    return(
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.desc}</p>
        </div>

    )






}