import React from 'react';
import {withStyles} from '@material-ui/core';
import { Navbar, Nav} from 'react-bootstrap';
import styles from './styles'
import PropTypes from 'prop-types';

function TopNavbar(props){
  const {classes} = props;

  return(
    <div>
      <Navbar
        className={classes.navbar}
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

TopNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TopNavbar);