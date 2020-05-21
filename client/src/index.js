import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './../node_modules/react-bootstrap/dist/react-bootstrap/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  NavBar  from './components/navbar/navbar';
import Home from './components/articles/home'
import { BrowserRouter, Route, Link } from "react-router-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <Home/>
//     <NavBar/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
<BrowserRouter>
<Route exact path="/"><NavBar/></Route>
<Route exact path="/home"><Home/></Route>
</BrowserRouter>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
