import React from 'react';
import './userimage.css'
const UserImage = props => {
    if(typeof(props.img)!=="undefined"){
        return <div>
        <img className='userimage' src={props.img} />
        </div>
    }else{
        return null;
    }

}
export default UserImage;