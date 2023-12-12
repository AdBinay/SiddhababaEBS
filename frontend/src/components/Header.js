//rfce

import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar,Nav, Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Siddhababa_EBS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to='/notices'>
                <Nav.Link ><i className='fa fa-bell'></i> Notice</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/gallery'>
                <Nav.Link ><i className="fa-solid fa-image"></i> Gallery</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/login'>
                <Nav.Link ><i className="fa-solid fa-user"></i> Login</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header