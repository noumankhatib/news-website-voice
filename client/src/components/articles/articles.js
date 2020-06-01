import React, { Component,useState,useEffect } from "react";
import { useParams } from 'react-router-dom'
import Posts from '../articles/Posts'
import Pagination from '../articles/Pagination'
//import Pagination from "react-js-pagination";
import { CardDeck, Card, useAccordionToggle } from "react-bootstrap";
import "../../App.css";

const Article  =() => {

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage,setPostsPerPage] = useState(10);
    const [postsLength, setPostsLength] = useState(0);
    const [activePage] = useState(1)
	let { articleType, category } = useParams();
			useEffect(()=>{
					setLoading(true);
					
					const requestOptions = {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ category,
						articleType})
					};
					let filter =`pageNo=${currentPage}&size=${postsPerPage}`
					fetch('http://localhost:5000/api/v1/articles/getArticles?'+filter, requestOptions)
					.then(async response => {
						const data = await response.json();
				
						if (!response.ok) {
							
							const error = (data && data.message) || response.status;
							//return reject(error);
						}
						console.log("DATA"+JSON.stringify(data.data.docs))
						setPosts(data.data.docs)
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
					<CardDeck>
					<Posts posts={posts} loading={loading} />
					<Pagination
							postsPerPage={postsPerPage}
							totalPosts={postsLength}
						/>
		
			  		</CardDeck>
			  </div>
		)

}

export default Article;
