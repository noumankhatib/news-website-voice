import React, { Component } from 'react';
import { addArticle } from "../utils/https-client";
import {getAllCatagory} from '../utils/https-client'
import {Form,Button,Col,Dropdown,Row,DropdownButton} from "react-bootstrap";
class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    catagory: '',
    title: '',
    articletype:'',
    author: '',
    content: '',
    image: '',
    url: '',
    catagorys:'',
    error:'',
    loading:true
    };
  
  }
  componentDidMount(){
    getAllCatagory()
    .then((result) => {
      this.setState({catagorys:result,loading:false})
      console.log("catagory"+JSON.stringify(this.state.catagorys))
      
    })
    .catch((errors) => {
      this.setState({error:errors,loading:false});
    });
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { category, title, articleType,author,description,content,image,url } = this.state;

    const record = {
      category,
      title,
      articleType,
      description,
      author,
      content,
      image,
      url
    };

    addArticle(record)
			.then((result) => {
        alert(result)
        console.log("Success created")
			})
			.catch((error) => {
        alert(error)
        console.log("error occur while create ")
			});
}
if(loading)
{
	return <h2>loading.......</h2>

}
render() {
  
  return (
<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label column sm={2}>Category</Form.Label>
  <Col sm={10}>
    <Form.Control size="sm" type="text" placeholder="Category"   name="category" required onChange={this.handleInputChange} />
    </Col>
    
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label column sm={2} >Title</Form.Label>
    <Col sm={10}>
    <Form.Control size="sm" type="text" placeholder="Title" name="title"  required onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label column sm={2}>Article Type</Form.Label>
    <Col sm={10}>
    <Form.Control size="sm" type="text" placeholder="Article Type" name="articleType" required onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label column sm={2}>Author</Form.Label>
    <Col sm={10}>
    <Form.Control size="sm" type="text" placeholder="Author" name="author" required onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label column sm={2}>Description</Form.Label>
    <Col sm={10}>
    <Form.Control size="sm" type="text" placeholder="Author" name="description" required onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label column sm={2}>Content</Form.Label>
    <Col sm={10}>
    <Form.Control  size="sm" as="textarea" rows="3" placeholder="Content" name="content" required onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleForm.ControlInput1">
      <Form.File.Label>Image</Form.File.Label>
      <Form.File.Input name="image" onChange={this.handleInputChange} />
    </Form.File>
    </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label column sm={2}>Url</Form.Label>
    <Col sm={10}>
    <Form.Control size="sm" type="text" placeholder="Url" name="url" required onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
}
}

export default AddArticle;
