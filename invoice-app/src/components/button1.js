import React from 'react'
import './button1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons'


const Button1= (props) =>{
    return(
        <div className='my-button'>
            <FontAwesomeIcon icon={faCirclePlus} className='my-icon'></FontAwesomeIcon>
            <div className='button-text'>{props.buttonText}</div>
        </div>
    );
}

export default Button1;