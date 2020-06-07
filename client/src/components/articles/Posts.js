import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import "../../App.css";
import { imp1 } from "../asserts/nouman.jpg";
const Post = ({ posts, loading }) => {
	if (loading) {
		return <h2>loading.......</h2>;
	}
	console.log(posts);

	return posts.map((post) => (
		<Card border="success" className="mycustomcard">
			<Card.Img variant="top" src={post.image} />
			<Card.Body>
				<Card.Header>
					<small className="text-muted">Author: {post.author}</small>
				</Card.Header>
				<br />
				<Card.Title>{post.title}</Card.Title>
				<Card.Subtitle>{post.category}</Card.Subtitle>
				<Card.Title>{post.articleType}</Card.Title>
				<Card.Text>{post.description}</Card.Text>
				<Card.Text>{post.content}</Card.Text>
				<Card.Link>{post.url}</Card.Link>
				<br />
				<Button variant="primary">Read More</Button>
			</Card.Body>
		</Card>
	));
};
export default Post;
