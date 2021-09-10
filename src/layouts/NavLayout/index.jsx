import * as PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import compose from 'recompose/compose'
import styles from './styles'
import {TopNavbar} from './components';
import {withStyles, withWidth} from '@material-ui/core';
import Footer from './components/Footer';

function NavLayout(props){

  const {classes, children} = props;

  return(
    <Fragment>
      <TopNavbar className={classes.topnavbar}/>
      <main
        className={classes.content}
      >
        {children}
        <Footer className={classes.footer}/>
      </main>
    </Fragment>
  )
}

NavLayout.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth())(NavLayout)