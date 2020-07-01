import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App'
import { Store } from './Store'

ReactDOM.render(
    <Store>
        <App/>
    </Store>
    , document.getElementById('root')
);
