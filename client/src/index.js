import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/articles/home";
import AddArticle from "./components/form/AddArticle";
import AddCategory from "./components/form/AddCategory";
import Articles from "./components/articles/articles"
import "holderjs";

ReactDOM.render(
	<div>
		<NavBar />
		<Container>
			<BrowserRouter>
				<Route exact path="/">
					<App />
				</Route>
				<Route exact path="/page/:page">
					<App />
				</Route>
				<Route exact path="/addarticle">
					<AddArticle />
				</Route>
				<Route exact path="/displayarticles">
					<Articles />
				</Route>
				<Route exact path="/addcategory">
					<AddCategory />
				</Route>
				<Route exact path="/articles/:articleType/:category">
					<Articles />
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
