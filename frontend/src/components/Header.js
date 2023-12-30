import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <header>
      <Navbar
        bg="info"
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="border-bottom border-light rounded shadow"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between"
          >
            <Nav className="mr-auto">
              <LinkContainer to="/notices">
                <Nav.Link className="text-light">
                  <i className="fa fa-bell"></i> Notice
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <Nav.Link className="text-light">
                  <i className="fa-solid fa-image"></i> Gallery
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/calender">
                <Nav.Link className="text-light">
                  <i className="fa fa-calendar"></i> Calender
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/curriculum">
                <Nav.Link className="text-light">
                  <i className="fa-solid fa-book"></i> Curriculum
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faculty">
                <Nav.Link className="text-light">
                  <i className="fa-solid fa-users"></i> Teaching Faculty
                </Nav.Link>
              </LinkContainer>
              <NavDropdown
              id="nav-dropdown-dark-example"
              title="About us"
              menuVariant="dark"
              >
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
            </NavDropdown>
            </Nav>
            <Form inline className="">
              <Row className="align-items-center">
                <Col xs="auto" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 rounded"
                  />
                </Col>
                <Col xs="auto">
                  <Button variant="outline-light rounded" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
