import React from 'react';
import { CardDeck, Card ,Button,CardGroup} from "react-bootstrap";
import "../../App.css";
import {imp1} from "../asserts/download.jpeg"
const Post =({posts, loading})=>{
    if(loading)
    {
        return <h2>loading.......</h2>
    }
    return(
        posts.map(post=>(
                <CardDeck>
            <Card border="success">
            <Card.Img variant="top" src={imp1}/>
            <Card.Body>
            <Card.Header>
            <small className="text-muted">Author: {post.author}</small>
            </Card.Header>
            <br/>
                <Card.Title>Title: {post.title}</Card.Title>
                <Card.Subtitle>Category: {post.category}</Card.Subtitle>
                <Card.Title>Article Type: {post.articleType}</Card.Title>
                <Card.Text>Description: {post.description}</Card.Text>
                <Card.Text>Content: {post.content}</Card.Text>
                <Card.Link>Url: {post.url}</Card.Link><br/>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        <br/>
        </CardDeck>
        ))
    )
}
export default Post;