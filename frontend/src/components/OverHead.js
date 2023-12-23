import './OverHead.css'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
function OverHead() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Updateing the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Navbar bg="light" className="OverHead">
      <Container>
        <Nav className="me-auto">
          <LinkContainer to="/mission">
            <Nav.Link >
              Our Mission
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/vision">
            <Nav.Link >
              Our Vision
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/objectives">
            <Nav.Link >
              Our Objectives
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link disabled>{currentDateTime.toLocaleDateString(undefined, options)}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled>{currentDateTime.toLocaleTimeString()}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default OverHead;


