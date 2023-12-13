//rfce

import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar,Nav, Container, Row, Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Siddhababa</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mr-auto ">
              <LinkContainer to='/notices'>
                <Nav.Link ><i className='fa fa-bell '></i> Notice</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/gallery'>
                <Nav.Link ><i className="fa-solid fa-image"></i> Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/downloads'>
                <Nav.Link ><i className="fa-solid fa-download"></i> Downloads</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/curriculum'>
                <Nav.Link ><i className="fa-solid fa-book"></i> Curriculum</Nav.Link>
              </LinkContainer> 
              <LinkContainer to='/faculty'>
                <Nav.Link ><i className="fa-solid fa-users"></i> Teaching Faculty</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button variant="outline-success" type="submit" >Submit</Button>
            </Col>
          </Row>
          </Form>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header