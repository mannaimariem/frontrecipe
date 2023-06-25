import React from "react";
import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Add = ({ show, handleClose, addRecipe }) => {
  
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    rating: 1,
    description: "",
    posterUrl: "",
    ingredients: "",
    preparation: "",
  });

  const onStarClick = (nextValue) => {
    setNewRecipe({ ...newRecipe, rating: nextValue });
  };
  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter recipe name"
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Picture url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter picture url"
                  name="posterUrl"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe the recipe"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Ingrediants</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter ingredients"
                name="ingredients"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Preparation</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter preparation steps"
                name="preparation"
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3">
              <Form.Label>Recipe Rating</Form.Label>
              <br />
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={newRecipe.rating}
                onStarClick={onStarClick}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addRecipe(newRecipe);
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
