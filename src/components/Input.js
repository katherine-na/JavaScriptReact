import React, { useState } from "react";

const Input = (props) => {

    const [label, setLabel] = useState(props.label)
    // console.log(label);

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        // console.log(e.target.value);
        setValue(e.target.value)
    }
    console.log(value);
    return(
        <>
            <label>{label}</label>
            <input type="text" value={value} onChange={handleChange}/>
        </>
    )
}

export default Input;