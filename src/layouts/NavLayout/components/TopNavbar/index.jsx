import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import classNames from 'classnames';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';

function TopNavbar(props){
  return(
    <div>
      <Navbar
        bg="dark"
        fixed="top"
        position="sticky"
        variant="dark"
      >
        <Navbar.Brand href="/builder">
                   Test
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Kategorie 1</Nav.Link>
          <Nav.Link href="#features">Kategorie 2</Nav.Link>
          <Nav.Link href="#pricing">Kategorie 3</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
                       Signed in as: <a href="#login">Test User</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default compose(TopNavbar);