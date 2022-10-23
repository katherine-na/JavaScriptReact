import React from "react";
import "../styles/components/user.css"

const User = (props) => {
    console.log(props);
    return ( 
        <div className="user-item">
            <p>{props.data.name}</p>
            <p>{props.data.email}</p>
            <p>{props.data.phone}</p>
            <p>{props.data.company.name}</p>
        </div>
     );
}
 
export default User;