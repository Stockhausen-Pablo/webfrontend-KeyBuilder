import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import {compose} from 'recompose';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, {useState} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {withTranslation} from 'react-i18next';


function ComponentCard(props){
  const {classes, className, component} = props;

  const [imagePath] = useState('/static/images/cards/');

  const rootClassName = classNames(classes.root, className);

  return(
    <Card className={rootClassName}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h6"
            variant="h6"
          >
            {component.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="subtitle2"
          >
            {component.description}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.media}
        component="img"
        image={imagePath+ component.filename}
        title={component.hoverText}
      />
    </Card>
  );
}

ComponentCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withTranslation())(ComponentCard);