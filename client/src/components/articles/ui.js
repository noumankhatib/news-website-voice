import React from "react";
import data from "./testdata.json";
import { Row, Col, Badge, Button } from "react-bootstrap";
import * as css from "./ui.css";
class UI extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<ul></ul>
				<SubItem post={data.data.docs[1]} />
				<SubItem post={data.data.docs[2]} />
				<SubItem post={data.data.docs[3]} />
			</>
		);
	}
}

class SubItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<div className="ui-item">
					<Row>
						<Col xs="6" md="4" className="ui-div-image">
							<img
								className="ui-image"
								src={this.props.post.image}
							/>
						</Col>
						<Col xs="6" md="8">
							<Row className="ui-item-title">
								{this.props.post.title}
							</Row>
							<Row>
								<Badge variant="success">
									{this.props.post.category}
								</Badge>
							</Row>
							<Row>
								<span className="ui-item-author-by">
									<b>Article By </b>
								</span>

								<span className="ui-item-author">
									{this.props.post.author} on
								</span>
								<span className="ui-item-date">
									{new Date(
										this.props.post.createdAt
									).toString()}
								</span>
							</Row>
							<Row className="ui-item-desc">
								{this.props.post.description}
							</Row>
							<Row className="ui-item-content">
								<p>{this.props.post.content}</p>
							</Row>
							<Row className="ui-item-src">
								<a href={this.props.post.url}>
									{this.props.post.url}
								</a>
							</Row>
							{/* <Row>
								<Button variant="primary">Read more</Button>{" "}
							</Row> */}
						</Col>
					</Row>
				</div>
			</>
		);
	}
}
export default UI;
