import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default props =>{

    const {id} = props
    const [state, setState] = useState({
        title: "",
        price: "",
        desc: "" 
    })

    const {title, price, desc} = state

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setState({
                    ...state,
                    title: res.data.title,
                    price: res.data.price,
                    desc: res.data.desc
                })
            })
    }, [])

    const handleChange = e =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            desc
        })
            .then(res => console.log(res))
    }

    return(
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
            <p>
                <label> Title: </label><br/>
                <input type="text" name="title" onChange={handleChange} value={title}/>
            </p>
            <p>
                <label> Price: </label><br/>
                <input type="number" name="price" onChange={handleChange} value={price}/>
            </p>
            <p>
                <label> Description: </label><br/>
                <input type="text" name="desc" onChange={handleChange} value={desc}/>
            </p>
            <input type="submit" value="submit"/>
            </form>
        </div>


    )


}