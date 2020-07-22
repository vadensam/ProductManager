import React from 'react';
import {navigate} from '@reach/router'

export default props => {

    const {info} = props;
   
    return(
        <div>
                <h2>Product List: </h2>
            <div className="looks">
                
                    {
                        info.map((item, i) =>
                        <p key={i} onClick={(e)=> {navigate(`products/${item._id}`)}}> {item.title}</p>
                        )
                    }
                
            </div>
        </div>
    )


}