import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const UpdateRecipeModal = ({
  show,
  handleClose,
  handleUpdate,
  recipe,
  handleInputChange,
}) => {
  const onStarClick = (nextValue) => {
    handleInputChange({
      target: {
        name: "rating",
        value: nextValue,
      },
    });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Recipe</Modal.Title>
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
                  value={recipe.title}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Picture url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter picture url"
                  name="posterUrl"
                  value={recipe.posterUrl}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe the recipe"
                name="description"
                value={recipe.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter ingredients"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleInputChange}
              />
            </Form.Group>

            <br />

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Preparation</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter preparation steps"
                name="preparation"
                value={recipe.preparation}
                onChange={handleInputChange}
              />
            </Form.Group>

            <br />

            <Form.Group className="mb-3">
              <Form.Label>Recipe Rating</Form.Label>
              <br />
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={recipe.rating}
                onStarClick={onStarClick}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateRecipeModal;
