import React from "react";

function Conditional(props) {
    console.log(props.isLoading)
    if (props.isLoading === true){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }else {
        return(
            <h1>Your Page is Loaded Successfully</h1>
        )
    }
    
}
export default Conditional;