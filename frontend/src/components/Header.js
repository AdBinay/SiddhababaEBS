//rfce

import React from 'react'
import { Navbar,Nav, Container, Row } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Siddhababa_EBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/notice"><i className='fa fa-bell'></i> Notice</Nav.Link>
              <Nav.Link href="/login"><i class="fa-solid fa-user"></i> Login</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header