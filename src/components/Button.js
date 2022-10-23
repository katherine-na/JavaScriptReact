import React, {useState} from "react";

const Button = () => {

    const [name, setName] = useState('Liz')
    console.log(name);

    const handleClick = (e) => {
        console.log(e);
        setName('Marilyn')
    }

    const [disabled, setDisabled] = useState(true)

    return(
        <div>
            <p>{name}</p>
            <button disabled={disabled} onClick={handleClick}>click</button>
        </div>
    )
}

export default Button;