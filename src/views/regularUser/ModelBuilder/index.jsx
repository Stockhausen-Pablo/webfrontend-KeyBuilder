import React from 'react';
import {Grid, withStyles} from '@material-ui/core';
import styles from './styles'
import {compose} from 'recompose';
import {withTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {KeyboardBuilder} from '../../../components';
import NavLayout from '../../../layouts/NavLayout';

function ModelBuilder(props){

  const {classes, className} = props;

  const rootClassName = classNames(classes.root, className);

  return(
    <NavLayout>
      <div className={classes.root}>
        <Grid
          className={classes.root}
          container
        >
          <Grid
            item
            xs={6}
          >
            <Grid
              container
              justify="center"
            >
              <p>testwerwer</p>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Grid
              container
              justify="center"
            >
              <KeyboardBuilder/>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </NavLayout>
  )
}

ModelBuilder.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withTranslation())(ModelBuilder);