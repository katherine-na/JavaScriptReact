import React from "react";


const CatItem = (props) => {
    return(
        <div className="cat-item">
            <h1>Cat</h1>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.race}</p>

        </div>
    )
}

export default CatItem;