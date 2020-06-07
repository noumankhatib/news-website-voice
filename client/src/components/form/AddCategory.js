import React, { Component } from 'react';
import { getAllCatagory, addCategory } from '../utils/https-client'
import { Form, Button, Col } from "react-bootstrap";
class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [],
      category: '',
      loading: true
    };
  }
  componentDidMount() {
    getAllCatagory()
      .then((result) => {
        this.setState({ categorys: result, loading: false })
      })
      .catch((errors) => {
        this.setState({ error: errors, loading: false });
      });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { category } = this.state
    console.log("value" + category)

    addCategory(category)
      .then((result) => {
        alert(result)
        console.log("Success created")
      })
      .catch((error) => {
        alert(error)
        console.log("error occur while create ")
      });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit} >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Category List</Form.Label>
              <Form.Control as="select">
                <option>Default.............</option>
                {
                  !this.state.loading
                    ?
                    this.state.categorys.map(category => (
                      <option>
                        {category}
                      </option>

                    )) :
                    (<h2>loading.......</h2>)
                }
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Category" name="category" required onChange={this.handleInputChange} />
            </Form.Group>
          </Form.Row>


          <Button type="submit" className="my-1">
            Submit
  </Button>

        </Form>

      </React.Fragment>
    )
  }
}

export default AddCategory;