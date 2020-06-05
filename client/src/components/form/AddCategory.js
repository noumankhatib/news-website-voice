import React, { useState, useEffect } from 'react';
import { getAllCatagory } from '../utils/https-client'
import { Form, Button, Col } from "react-bootstrap";
const AddCategory = () => {
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
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
  }, [])



  return (
    <React.Fragment>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category List</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              {
                !loading
                  ?
                  categorys.map(category => (
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
            <Form.Control type="text" placeholder="Category" name="Category" required />  </Form.Group>
        </Form.Row>
        <Button type="submit" className="my-1">
          Submit
  </Button>
      </Form>
    </React.Fragment>
  )
}

export default AddCategory;