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
        <Navbar.Brand
          className={classes.leftStart}
          href="/"
        >
          KeyBuilder
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/builder">Builder</Nav.Link>
          <Nav.Link href="/catalogs">Catalogs</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className={classes.rightEnd}>
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