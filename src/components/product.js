import React from "react";

function Products(props) {
    console.log(props)
    return(
        <div>
            <h3>Name : {props.name}</h3>
            <p>Price : ${props.price} 
            - Description:{props.description}</p>
        </div>
    )
}
export default Products;