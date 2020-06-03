import React, {useState, useEffect } from 'react';
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
        console.log("Welcome" + JSON.stringify(categorys))
        setLoading(false)
      })
      .catch((error) => {
        setCategorys(error);
        setLoading(false)
      });
  }, [])



  return (
    <Form>
      <Form.Row>
   <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category List</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              {
                loading
                  ?
                  categorys.map(category => (
                    <option>
                      {category}
                    </option>

                  )) :
                  (<h2>loading.......</h2>)
              }
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Url" name="url" required  />  </Form.Group>          
        </Form.Row>
      <Button type="submit" className="my-1">
        Submit
  </Button>
    </Form>
  )
}

export default AddCategory;