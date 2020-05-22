import React from "react";

import "./App.css";
import { CardDeck, Card } from "react-bootstrap";

class App extends React.Component {
	constructor() {
		super();
		this.data = [
			{
				_id: "5ebfe27a3d73c057ccbdc4db",
				catagory: "politic",
				title: "recent fight 1",
				articletype: "opinionFeeds",
				author: "nouman",
				content: "Welcome to the world",
				url: "www.facebook.com",
				v: 0,
			},
			{
				_id: "5ebfe27c3d73c057ccbdc4dc",
				catagory: "politic",
				title: "recent fight 2",
				articletype: "opinionFeeds",
				author: "nouman",
				content: "Welcome to the world",
				url: "www.facebook.com",
				_v: 0,
			},
			{
				_id: "5ebfe27c3d73c057ccbdc4dc",
				catagory: "politic",
				title: "recent fight 2",
				articletype: "opinionFeeds",
				author: "nouman",
				content: "Welcome to the world",
				url: "www.facebook.com",
				_v: 0,
			}
		];
	}
	render() {
		let cards = this.data.map((d, index) => {
			console.log(d, index);
			// eslint-disable-next-line no-unused-expressions
			return (
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>{d.title}</Card.Title>
						<Card.Text>{d.content}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Author: {d.author}</small>
					</Card.Footer>
				</Card>
			);
		});

		return (
			<div className="App">
				<CardDeck>{cards}</CardDeck>

				{/* <CardDeck>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural
								lead-in to additional content.{" "}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
				</CardDeck> */}
			</div>
		);
	}
}

export default App;
