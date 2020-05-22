import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar/navbar";
import Home from "./components/articles/home";
import "holderjs";

ReactDOM.render(
	<div>
		<NavBar />
		<Container>
			<BrowserRouter>
				<Route exact path="/">
					<App />
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
			</BrowserRouter>
		</Container>
	</div>,
	document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
