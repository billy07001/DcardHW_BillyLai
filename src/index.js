import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import Topnav from './component/nav';
import "./style/index.css";

ReactDOM.render(<Topnav />,document.getElementById('top'));
ReactDOM.render(<App />,document.getElementById('root'));