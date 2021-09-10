import {Nav, Navbar} from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import {withStyles} from '@material-ui/core';
import styles from './styles'

function Footer(props){
  const {classes, className} = props;

  return(
    <div className={classes.root}>
      <Navbar
        className={classes.navbar}
        position="sticky"
        variant="dark"
      >
        <Nav className="mr-auto">
          <Nav.Link style={{ marginRight: '.5rem' }}>© KeyBuilder.com</Nav.Link>
          <Nav.Link
            href="/privacy"
            style={{ marginRight: '.5rem' }}
          >Privacy</Nav.Link>
          <Nav.Link href="/dsgvo">DSGVO</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(Footer);