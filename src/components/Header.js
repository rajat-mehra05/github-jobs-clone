import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom' 

const getStyle= {
    color: 'crimson',
    paddingRight: '90px'
}
export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> <h1> Github Jobs </h1> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    <Nav>
      <Link to ="/contact" style={getStyle}> <h5>  Contact Me </h5></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
