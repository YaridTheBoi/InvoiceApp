import React from 'react';
import ProfilePicture from './profilePicture.js';
import './navbar.css'
class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className='navbar'>
                    


                    <div className='logo'>
                        <div className='oval'>
                            <div className='triangle'></div>
                        </div>
                    </div>


                    <div className='navbar-down'>
                        <ProfilePicture avatarURL='cos'></ProfilePicture>
                    </div>

                </div>
                

            </div>
        );
            
        
    }
}
export default Navbar;
