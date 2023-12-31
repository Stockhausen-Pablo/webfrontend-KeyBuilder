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
import Box from '@material-ui/core/Box';

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
  case2.name = 'Tofu60';
  case2.description = 'Tofu60 Aluminium Case';
  case2.filename = 'metal_case.jpg';
  case2.modelname = 'case_tofu60_alumiunum_test.glb';
  case2.hoverText = 'case1 hover';

  keyboardCases.push(case1);
  keyboardCases.push(case2);
  //--------------------------

  console.log(selectedCase);

  return (
    <NavLayout>
      <div className={rootClassName}>
        <Box
          component="span"
          m={1}
        >
          <Paper
            className={classes.paper}
            variant="outlined"
          >
            <Grid
              className={classes.root}
              container
            >
              <Grid
                item
                xs={4}
              >
                <KeyboardPartSelector
                  keyboardCases={keyboardCases}
                  setSelectedCase={setSelectedCase}
                />
              </Grid>
              <Grid
                item
                xs={7}
              >
                <KeyboardBuilder
                  selectedCase={selectedCase}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
    </NavLayout>
  )
}

ModelBuilder.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withTranslation())(ModelBuilder);