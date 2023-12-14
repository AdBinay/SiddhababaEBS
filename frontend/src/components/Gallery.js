import React from "react";
import Card from "react-bootstrap/Card";

const Gallery = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center text-danger text-decoration-underline">
        Images
      </h1>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#f8f7fa",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          border: "1px solid #ccc",
        }}
        className="rounded"
      >
        <div className="d-flex justify-content-start mt-6"></div>
        <Card.Title
          style={{ color: "#0097a7", textAlign: "center", marginTop: "10px" }}
        >
          Card Title
        </Card.Title>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Gallery;
