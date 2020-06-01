import React, { Component,useState,useEffect } from "react";
import Posts from '../src/components/articles/Posts'
import Pagination from '../src/components/articles/Pagination'
import { CardDeck, Card, useAccordionToggle } from "react-bootstrap";
import "./App.css";
import { useParams } from 'react-router-dom';
import {getAllArticles} from '../src/components/utils/https-client'
const App  =() => {
	
	let {page} = useParams();
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage,setPostsPerPage] = useState(10);
	const [postsLength, setPostsLength] = useState(0);

			useEffect(()=>{
					setLoading(true);
					if(!page)
					{
						page =1;
					}

					let filter =`pageNo=${page}&size=${postsPerPage}`
			getAllArticles(filter)
			   .then((data) => {
					setPosts(data.data.docs);
						setCurrentPage(data.data.page)
						setPostsPerPage(data.data.limit)
						setPostsLength(data.data.totalDocs)
						setLoading(false)
					})
					.catch(error => {
					   // this.setState({ errorMessage: error.toString() });
						console.error('There was an error!', error);
					});
				},[])
		  
		return(
			<div className="App">
					<Posts posts={posts} loading={loading} />
							<Pagination
							postsPerPage={postsPerPage}
							totalPosts={postsLength}
						/>
			  </div>
		)

}

export default App;
