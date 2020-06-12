import React from 'react';

import './Avatar.css'



const Avatarlist = (props) => {
    return (
            <div className="avatarstyle   ma4 bg-light-purple dib pa3 tc grow shadow-4">
                <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
                <h1>{props.name}</h1>
                <p className="tc">{props.work}</p>
            </div>
    )
}

export default Avatarlist;