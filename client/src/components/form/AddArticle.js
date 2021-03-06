import React, { Component } from "react";
import { addArticle } from "../utils/https-client";
import { getAllCatagory } from "../utils/https-client";
import { Form, Button, Col } from "react-bootstrap";
class AddArticle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "",
			title: "",
			articletype: "",
			author: "",
			content: "",
			image: "",
			url: "",
			categorys: [],
			error: "",
			loading: true,
			imagePreviewUrl: "",
		};
		this.handleImageChange = this.handleImageChange.bind(this);
	}
	componentDidMount() {
		getAllCatagory()
			.then((result) => {
				this.setState({ categorys: result, loading: false });
			})
			.catch((errors) => {
				this.setState({ error: errors, loading: false });
			});
	}
	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleImageChange(e) {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		console.log(file);
		let _this = this;
		console.log(this.state);
		reader.onload = function () {
			console.log(reader.result);
			_this.setState({ image: reader.result });
			console.log(_this.state);
		};
		reader.readAsDataURL(file);
		console.log("start");
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const {
			category,
			title,
			articleType,
			author,
			description,
			content,
			image,
			url,
		} = this.state;
		const record = {
			category,
			title,
			articleType,
			description,
			author,
			content,
			image,
			url,
		};

		addArticle(record)
			.then((result) => {
				alert(result);
				console.log("Success created");
			})
			.catch((error) => {
				alert(error);
				console.log("error occur while create ");
			});
	};

	render() {
		const { categorys, loading } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Title</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							placeholder="Title"
							name="title"
							required
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Author</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							placeholder="Author"
							name="author"
							required
							onChange={this.handleInputChange}
						/>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Description</Form.Label>
					<Form.Control
						size="sm"
						type="text"
						placeholder="Description"
						name="description"
						required
						onChange={this.handleInputChange}
					/>
				</Form.Group>

				<Form.Group controlId="formGridAddress2">
					<Form.Label>Content</Form.Label>
					<Form.Control
						size="sm"
						as="textarea"
						rows="3"
						placeholder="Content"
						name="content"
						required
						onChange={this.handleInputChange}
					/>
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Article Type</Form.Label>
						<Form.Control
							as="select"
							name="articleType"
							required
							onChange={this.handleInputChange}
						>
							<option>Default.............</option>
							<option value="newsFeeds"> News Feeds</option>
							<option value="opinionFeeds">Option Feeds</option>
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Category</Form.Label>
						<Form.Control
							as="select"
							name="category"
							required
							onChange={this.handleInputChange}
						>
							<option>Default.............</option>
							{!loading ? (
								categorys.map((category) => (
									<option value={category}>{category}</option>
								))
							) : (
								<h2>loading.......</h2>
							)}
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Url</Form.Label>
						<Form.Control
							size="sm"
							type="text"
							placeholder="Url"
							name="url"
							required
							onChange={this.handleInputChange}
						/>{" "}
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Image</Form.Label>
						<Form.File.Input
							type="file"
							name="image"
							onChange={this.handleImageChange}
						/>
					</Form.Group>
				</Form.Row>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default AddArticle;
