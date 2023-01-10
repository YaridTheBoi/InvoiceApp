import React from 'react'
import './button2.css'


const Button2= (props) =>{

    return(
        <div className='my-button2' onClick={props.onClick}>
            <div className='button-text2'>{props.buttonText}</div>
        </div>
    );
}

export default Button2;