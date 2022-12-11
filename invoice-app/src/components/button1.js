import React from 'react'
import './button1.css'

const Button1= (props) =>{
    return(
        <div className='my-button'>
            {props.buttonText}
        </div>
    );
}

export default Button1;