import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Demo from './Demo';
import Demo2 from './Demo2';
import Avatar from './Avatar';

ReactDOM.render(
  <React.StrictMode>
    {/*<Demo2 name="Khalid Pervez!"/>*/}
    <Avatar />
  </React.StrictMode>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
