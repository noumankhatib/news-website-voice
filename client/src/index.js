import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import AddArticle from "./components/form/AddArticle";
import AddCategory from "./components/form/AddCategory";
import Test from "./components/form/test";
import Articles from "./components/articles/articles"
import "holderjs";
//import Cards from "./components/articles/cards"

ReactDOM.render(
	<div>
		<NavBar />
		<Container>
			<Router>
				<Switch>
				{/* <Route exact path="/cards">
					<Cards />
				</Route> */}
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
				<Route exact path="/test">
					<Test />
				</Route>
				<Route exact path="/articles/:articleType/:category">
					<Articles />
				</Route>
				</Switch>
			</Router>
		</Container>
	</div>,
	document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
