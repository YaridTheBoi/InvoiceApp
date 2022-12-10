import React from 'react';

import ProfilePicture from './profilePicture.js';
import Logo from './logo.js';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-solid-svg-icons'
const Navbar = () =>{
    return(
        <div>
            <div className='navbar'>
                
                <Logo></Logo>
                <div className='navbar-down'>

                    <FontAwesomeIcon
                    icon={faMoon}
                    className="my-icon"
                    ></FontAwesomeIcon>


                    <div className='split-line'></div>

                    <ProfilePicture avatarURL='cos'></ProfilePicture>
                </div>

            </div>
            

        </div>
    );
}
export default Navbar;
