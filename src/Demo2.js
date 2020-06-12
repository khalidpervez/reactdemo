import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './Demo2.css'

/*const Demo2 = (props) => {
        return <div className="maindiv_style"> 
                    <h1>Hello {props.name}</h1>
                    <p>Welcome to my React App</p>
                </div>
}*/

const Demo2 = ({name}) => {
    return <div className="maindiv_style"> 
                <h1>Hello {name}</h1>
                <p>Welcome to my React App</p>
            </div>
}

export default Demo2;