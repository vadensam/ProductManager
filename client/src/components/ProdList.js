import React from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

export default props => {

    const {info, rmFromDom} = props
    
    

    const deleteProd = (prodID) =>{
        axios.delete(`http://localhost:8000/api/products/${prodID}`)
            .then(res=>{
                rmFromDom(prodID)
            })
    }
   
    return(
        <div>
                <h2>Product List: </h2>
            <div className="looks">
                
                    {
                        info.map((item, i) =>
                            <div key={i}>
                                <p  onClick={(e)=> {navigate(`products/${item._id}`)}}> {item.title}</p> 
                                <button onClick={(e) =>{deleteProd(item._id)}} >Delete</button>
                            </div>
                        )
                    }
                
            </div>
        </div>
    )


}