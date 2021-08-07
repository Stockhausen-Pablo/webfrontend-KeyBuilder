import Box from '@material-ui/core/Box';
import React from 'react';
import styles from './styles'
import {withStyles} from '@material-ui/core';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ComponentCard from '../ComponentCard';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import classNames from 'classnames';

import { Scrollbars } from 'react-custom-scrollbars';


function TabPanel(props){
  const { classes, className, children, value, index, components, setSelectedCase, ...other} = props;

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div
      style={{ ...style, ...thumbStyle }}
      {...props}
    />;
  };

  const CustomScrollbars = props => (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );

  const rootClassName = classNames(classes.root, className);

  return (
    <div
      aria-labelledby={`vertical-tab-${index}`}
      className={rootClassName}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <CustomScrollbars
          autoHide
          autoHideDuration={200}
          autoHideTimeout={500}
        >
          <Box p={3}>
            <List
              className={classes.list}
            >
              {components.map((component, index) => {
                return(
                  <ListItem
                    button
                    key={index}
                    onClick={() => setSelectedCase(component)}
                  >
                    <ComponentCard
                      component={component}
                    />
                  </ListItem>
                )
              })}
            </List>
            <Typography>{children}</Typography>
          </Box>
        </CustomScrollbars>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  components: PropTypes.array.isRequired,
  index: PropTypes.any.isRequired,
  setSelectedCase: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default withStyles(styles)(TabPanel);