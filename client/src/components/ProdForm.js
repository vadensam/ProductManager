import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default props =>{

    const {id, action} = props
    const [state, setState] = useState({
        title: "", price: "", desc: "" 
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        if(action === "edit"){
            axios.put(`http://localhost:8000/api/products/${id}`, state)
                .then(res => {
                    if(res.data.message === "success"){
                        navigate('/');
                    }
                })
                .catch(err => console.log(err))
        }
        else{
            axios.post('http://localhost:8000/api/create', state)
                .then(res => {
                    if(res.data.message === "success"){
                        console.log(res.data.result)
                    }
                })
                .catch(err => console.log(err))
        }
    }

    useEffect(() =>{
        if(action === "edit"){
            axios.get(`http://localhost:8000/api/products/${id}`)
                .then(res=>{
                    setState({
                        ...state,
                        title: res.data.result.title,
                        price: res.data.result.price,
                        desc: res.data.result.desc
                    })
                })
        }
    }, [])

    const handleChange = e =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }





    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label> Title: </label><br/>
                <input type="text" onChange={handleChange} name="title"  value={state.title}/>
            </p>
            <p>
                <label> Price: </label><br/>
                <input type="number" onChange={handleChange} name="price" value={state.price}/>
            </p>
            <p>
                <label> Description: </label><br/>
                <input type="text" onChange={handleChange} name="desc" value={state.desc}/>
            </p>
            <input type="submit" value="submit"/>
         
        </form>

    )

}