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
    const rmFromDom = prodID => {
        setProducts(products.filter(prod => prod._id !== prodID))
    }
    

    return (
        <div>
            <ProdForm/>
            <ProdList info={products} rmFromDom={rmFromDom}/>
        </div>

    )

}