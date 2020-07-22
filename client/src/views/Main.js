import React, {useState, useEffect} from 'react';
import ProdForm from '../components/ProdForm';
import ProdList from '../components/ProdList'
import axios from 'axios';

export default () => {

    const [products, setProducts] = useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
            })
    }, [])
    

    return (
        <div>
            <ProdForm/>
            <ProdList info={products}/>
        </div>

    )

}