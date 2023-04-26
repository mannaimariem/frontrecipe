import React from "react";
import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Add = ({ show, handleClose, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    rating: 1,
    description: "",
    posterURL: "",
  });
  const onStarClick = (nextValue) => {
    setNewMovie({ ...newMovie, rating: nextValue });
  };
  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter movie name"
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Poster url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter poster url"
                  name="posterURL"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe the movie"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Movie Rating</Form.Label>
              <br />
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={newMovie.rating}
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
          <Button variant="primary" onClick={()=>{addMovie(newMovie) ; handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
