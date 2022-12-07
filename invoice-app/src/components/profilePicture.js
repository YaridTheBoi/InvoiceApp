import React from 'react';
import './profilePicture.css'
class ProfilePicture extends React.Component{
    render(){
        return(
            <div className='profile-picture'>
                <img src={this.props.avatarURL} alt='avatar'></img>
            </div>
        );
            
        
    }
}
export default ProfilePicture;