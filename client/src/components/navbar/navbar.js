import { Navbar, NavDropdown, Form, Button, Nav } from "react-bootstrap";
import { getAllCatagory } from "../utils/https-client";
import React, { useState, useEffect } from "react";

const NavBar = (prop) => {
	const [categorys, setCategorys] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getAllCatagory()
			.then((result) => {
				setCategorys(result);
				setLoading(false);
			})
			.catch((error) => {
				setCategorys(error);
				setLoading(false);
			});
	}, []);

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Voice</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<NavDropdown title="News" id="basic-nav-dropdown">
						{!loading ? (
							categorys.map((category) => (
								<NavDropdown.Item
									href={`/articles/newsFeeds/${category}`}
								>
									{category}
								</NavDropdown.Item>
							))
						) : (
								<h2>loading.......</h2>
							)}
					</NavDropdown>
					<NavDropdown title="Opinion" id="basic-nav-dropdown">
						{!loading ? (
							categorys.map((category) => (
								<NavDropdown.Item
									href={`/articles/opinionFeeds/${category}`}
								>
									{category}
								</NavDropdown.Item>
							))
						) : (
								<h2>loading.......</h2>
							)}
					</NavDropdown>
					<Nav.Link href="/addcategory" disabled>AddCategory</Nav.Link>
					<Nav.Link href="/addarticle" disabled>AddArticle</Nav.Link>
				</Nav>
				<Form inline>
					<Button variant="outline-success" href="/login" >Login</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavBar;
