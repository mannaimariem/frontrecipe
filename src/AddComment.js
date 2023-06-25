import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function AddComment({ addComnt }) {
  const [newComment, setNewComment] = useState({
    userName: "Me", // Set default value to "Me"
    textComment: "",
  });

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddComment = () => {
    addComnt(newComment);
    setNewComment({
      userName: "Me", // Reset the userName to "Me"
      textComment: "",
    });
  };

  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            {/* Hide the username input field */}
            <Form.Control
              type="hidden"
              name="userName"
              value={newComment.userName}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Comment"
              name="textComment"
              value={newComment.textComment}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Button variant="primary" onClick={handleAddComment}>
              Add Comment
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}

export default AddComment;
