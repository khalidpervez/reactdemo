import React from 'react';
import './Avatar.css';

import 'tachyons';
import Avatarlist from './Avatarlist';

const avatarlistarray = [
    {
        id: 1,
        name: "Khalid",
        work: "Database"
    },
    {
        id: 2,
        name: "Hamza",
        work: "Web Developer"
    },
    {
        id: 3,
        name: "Abdullah",
        work: "BackEnd"
    },
    {
        id: 4,
        name: "farhan",
        work: "FrontEnd"
    }

]

const avatararraycard = avatarlistarray.map( (avatarcard, i) => {
    return <Avatarlist id={avatarlistarray[i].id} 
                       name={avatarlistarray[i].name}
                       work={avatarlistarray[i].work} />
})

const Avatar = (props) =>{
    return (
        <div className="mainpage">
        <h1>Welcome to Avatar</h1>
            {avatararraycard}
        <button> Subscribe</button>
        </div>
    )
}

export default Avatar;