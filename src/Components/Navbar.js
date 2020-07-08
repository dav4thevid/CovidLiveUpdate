import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import { Navbar, Nav, NavDropdown,  } from 'react-bootstrap';

function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
  <a className = "navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to ="/"className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to ="/about" className="nav-link">About<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to ="/more" className="nav-link">More<span className="sr-only"></span></Link>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to = "/overview" className="dropdown-item" >Overview</Link>
          <Link to = "/prevention" className="dropdown-item" >Prevention</Link>
          <Link to = "/symtoms" className="dropdown-item" >Symptoms</Link>
        </div>
      </li> */}
    </ul>
  </div>
</nav>

    )
}


export default Navigation

{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">CovidLiveUpdate</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto d-flex justify-content-right">
      <Nav.Link Link to="/about">About</Nav.Link>
      <Nav.Link href="/safety">Safety Measure</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}