import React, { Component,useState,useEffect } from "react";
import { getAllArticles } from "../utils/https-client";
import Posts from './Posts'
import Pagination from './Pagination'
import "../../App.css";
import { CardDeck, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import "../../App.css";
const Home =() => {
	let {page} = useParams();
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState();
	const [postsPerPage,setPostsPerPage] = useState();
	const [totalPosts,setTotalPosts] = useState();
		useEffect(()=>{
			const fetchPosts=async()=>
			{
				const requestOptions = {
					method: 'get',
					headers: { 'Content-Type': 'application/json' }
				};
				fetch('http://localhost:5000/api/v1/articles/getAllArticles', requestOptions)
				.then(async response => {
					const data = await response.json();
			
					if (!response.ok) {
						
						const error = (data && data.message) || response.status;
						//return reject(error);
					}
					console.log("data.data"+data.data.limit)
					setPostsPerPage(data.data.limit)
					setCurrentPage(data.data.page)
					setPosts(data.data);
					setTotalPosts(data.data.totalDocs)
					setLoading(false)
				})
				.catch(error => {
				   // this.setState({ errorMessage: error.toString() });
					console.error('There was an error!', error);
				});
			}
			fetchPosts();
		},[])
// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
const paginate = pageNumber => setCurrentPage(pageNumber);

	return(
		<div className="App">
				<CardDeck>
					<Posts posts={currentPosts} loading={loading} />
					<Pagination
					  postsPerPage={postsPerPage}
		 		 totalPosts={totalPosts}
		  paginate={paginate}></Pagination>
		  </CardDeck>
			</div>
	)

}
export default Home;
