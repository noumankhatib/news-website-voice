import { Navbar, NavDropdown, Form, Button, Nav } from "react-bootstrap";
import {getAllCatagory} from '../utils/https-client'
import React, { Component,useState,useEffect } from "react";

const NavBar =() => {
	const [categorys, setCategorys] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(()=>{
	setLoading(true);
	getAllCatagory()
			.then((result) => {
				setCategorys(result);
				setLoading(false)
			})
			.catch((error) => {
				setCategorys(error);
				setLoading(false)
			});
},[])
if(loading)
{
	return <h2>loading.......</h2>

}

		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/home">Voice</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<NavDropdown title="News" id="basic-nav-dropdown">
						{
							//newsFeeds
							categorys.map(category=>(
								<NavDropdown.Item href={`/articles/newsFeeds/${category}`} >
											{category}
								</NavDropdown.Item>
							))
						}
					
						</NavDropdown>
						<NavDropdown title="Opinion" id="basic-nav-dropdown">
						{
							//opinionFeeds
							categorys.map(category=>(
								<NavDropdown.Item  href={`/articles/opinionFeeds/${category}`} >
											{category}
								</NavDropdown.Item>
								
							))
						}
						</NavDropdown>
						<Nav.Link href="#link">AddCatagory</Nav.Link>
						<Nav.Link href="/addarticle">AddArticle</Nav.Link>
					</Nav>
					<Form inline>
						<Button variant="outline-success">Login</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
}
export default NavBar;
