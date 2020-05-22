import React, { Component } from "react";
import { getAllArticles } from "../utils/https-client";
import NavBar from "../navbar/navbar";
import { CardGroup } from "react-bootstrap";
//import { Container, Row, Col, Alert, Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			articles: [],
			error: null,
		};

		getAllArticles()
			.then((result) => {
				this.setState({
					articles: result,
					isLoading: false,
				});
			})
			.catch((error) => {
				this.setState({ error, isLoading: false });
			});
	}

	render() {
		const { articles, isLoading } = this.state;
		console.log("articles" + JSON.stringify(articles));
		return (
			<React.Fragment>
				<div>
					<NavBar />
				</div>
				<h1>React Fetch - Blog</h1>

				{!isLoading ? (
					articles.data.map((article) => {
						return (
							<div>
								<CardGroup></CardGroup>
							</div>
						);
					})
				) : (
					<p>Loading...</p>
				)}
			</React.Fragment>
		);
	}
}
export default Home;
