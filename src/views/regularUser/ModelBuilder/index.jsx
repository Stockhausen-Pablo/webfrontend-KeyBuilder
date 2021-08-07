import React, {useState} from 'react';
import {Grid, withStyles} from '@material-ui/core';
import styles from './styles'
import {compose} from 'recompose';
import {withTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {KeyboardBuilder} from '../../../components';
import NavLayout from '../../../layouts/NavLayout';

import Paper from '@material-ui/core/Paper';
import KeyboardPartSelector from '../../../components/KeyboardPartSelector';

function ModelBuilder(props) {

  const {classes, className} = props;

  const [keyboardCases, setKeyboardCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState('');

  const rootClassName = classNames(classes.root, className);


  // EXAMPLE DATA - TO DELETE
  const case1 = new Object();
  case1.name = 'Bamboo case';
  case1.description = 'Description of a Bamboo case';
  case1.filename = 'bamboo_case.jpg';
  case1.modelname = 'bamboo_case.glb';
  case1.hoverText = 'case1 hover';

  const case2 = new Object();
  case2.name = 'Metal case';
  case2.description = 'Description of a metal case';
  case2.filename = 'metal_case.jpg';
  case2.modelname = 'hard_plastic_case.glb';
  case2.hoverText = 'case1 hover';

  keyboardCases.push(case1);
  keyboardCases.push(case2);
  //--------------------------

  console.log(selectedCase);

  return (
    <NavLayout>
      <div className={rootClassName}>
        <Grid
          className={classes.root}
          container
        >
          <Grid
            item
            xs={4}
          >
            <Paper
              className={classes.paper}
            >
              <KeyboardPartSelector
                keyboardCases={keyboardCases}
                setSelectedCase={setSelectedCase}
              />
            </Paper>
          </Grid>
          <Grid
            item
            xs={7}
          >
            <Paper
              className={classes.paper}
            >
              <KeyboardBuilder
                selectedCase={selectedCase}
              />
            </Paper>
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