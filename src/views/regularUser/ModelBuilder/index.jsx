import React, {useEffect, useState} from 'react';
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

  const [switches, setSwitches] = useState([]);
  const [selectedSwitch, setSelectedSwitches] = useState('');

  const [keyboardBuild, setKeyboardBuild] = useState({
    keyboardCase: selectedCase,
    keyboardSwitch: selectedSwitch
  })

  const rootClassName = classNames(classes.root, className);

  // EXAMPLE Case DATA - TO DELETE
  const case1 = new Object();
  case1.name = 'Bamboo case';
  case1.description = 'Description of a Bamboo case';
  case1.filename = 'bamboo_case.jpg';
  case1.modelname = 'bamboo_case.glb';
  case1.hoverText = 'case1 hover';
  case1.size = '60'

  const case2 = new Object();
  case2.name = 'Tofu60';
  case2.description = 'Tofu60 Aluminium Case';
  case2.filename = 'metal_case.jpg';
  //case2.modelname = 'case_tofu60_alumiunum_test.glb';
  case2.modelname = 'hard_plastic_case.glb';
  case2.hoverText = 'case1 hover';
  case2.size = '60';

  keyboardCases.push(case1);
  keyboardCases.push(case2);
  //--------------------------

  // EXAMPLE Case DATA - TO DELETE
  const switch1 = new Object();
  switch1.name = 'Example Switch';
  switch1.description = 'Description of a example switch';
  switch1.filename = 'bamboo_case.jpg';
  switch1.modelname = 'keycap.glb';
  switch1.hoverText = 'switch1 hover';

  switches.push(switch1);
  //--------------------------
  
  useEffect(() => {
    setKeyboardBuild({...keyboardBuild,
      keyboardCase: selectedCase
    })
  }, [selectedCase, selectedSwitch])


  return (
    <NavLayout>
      <div className={rootClassName}>
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
                switches={switches}
                setSelectedSwitches={setSelectedSwitches}
              />
            </Grid>
            <Grid
              item
              xs={7}
            >
              {keyboardBuild &&
              <KeyboardBuilder
                keyboardBuild={keyboardBuild}
              />
              }
            </Grid>
          </Grid>
        </Paper>
      </div>
    </NavLayout>
  )
}

ModelBuilder.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withTranslation())(ModelBuilder);