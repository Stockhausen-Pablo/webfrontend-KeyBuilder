import React, {useState} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles'
import classNames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './components/TabPanel';
import PropTypes from 'prop-types';

import ThumbUp from '@material-ui/icons/ThumbUp';



function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function KeyboardPartSelector(props) {
  const {classes, className, keyboardCases, setSelectedCase} = props;

  const [value, setValue] = React.useState(0);

  const rootClassName = classNames(classes.root, className);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classNames(rootClassName, classes.selector)}>
      <Tabs
        aria-label="Vertical tabs"
        centered
        indicatorColor="primary"
        onChange={handleChange}
        orientation="vertical"
        value={value}
        variant="scrollable"
      >
        <Tab label="Cases" icon={<ThumbUp/>} {...a11yProps(0)} />
        <Tab label="Switches" icon={<ThumbUp/>}{...a11yProps(1)} />
        <Tab label="Keycaps" icon={<ThumbUp/>} {...a11yProps(2)} />
        <Tab label="Plates" icon={<ThumbUp/>} {...a11yProps(3)} />
        <Tab label="Stabilizers" icon={<ThumbUp/>} {...a11yProps(4)} />
        <Tab label="USB-Cable" icon={<ThumbUp/>} {...a11yProps(5)} />
        <Tab label="Dampening" icon={<ThumbUp/>} {...a11yProps(6)} />
        <Tab label="Lube" icon={<ThumbUp/>} {...a11yProps(7)} />
        <Tab label="Mods" icon={<ThumbUp/>} {...a11yProps(8)} />
      </Tabs>
      <TabPanel
        components={keyboardCases}
        index={0}
        setSelectedCase={setSelectedCase}
        value={value}
      />
    </div>
  );
}

KeyboardPartSelector.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  keyboardCases: PropTypes.array.isRequired,
  setSelectedCase: PropTypes.func.isRequired,
}

export default withStyles(styles)(KeyboardPartSelector);