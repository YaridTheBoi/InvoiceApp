import React from 'react';
import './profilePicture.css'


const ProfilePicture= (props)=>{

    return(
        <div className='profile-picture'>
            <img src={props.avatarURL} alt='avatar'></img>
        </div>
    );
};

export default ProfilePicture;