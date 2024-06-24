import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useLocation } from 'react-router-dom';

export default function TopBar() {
    let {pathname}=useLocation() //use loctaion used to locate and current page
  return  <>
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Information Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={`text-decoration mr-10 ${pathname==='/dashboard'?'active':""}`} to='/dashboard'><Nav.Item >Dashboard</Nav.Item></Link>
            <Link className={`text-decoration mr-10 ${pathname==='/create'?'active':""}`} to='/create'><Nav.Item>Create</Nav.Item></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
}
