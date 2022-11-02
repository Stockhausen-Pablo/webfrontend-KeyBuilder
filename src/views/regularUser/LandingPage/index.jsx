import PropTypes from 'prop-types';
import {compose} from 'recompose';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import {withTranslation} from 'react-i18next';
import classNames from 'classnames';
import {NavLayout} from '../../../layouts';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function LandingPage(props) {
  const {classes, t, className} = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <NavLayout>
      <div className={rootClassName}>
        <Box className={classes.box}>
          <Typography variant="h4" align="center" gutterBottom>
            {t('Welcome')}
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            {t('WelcomeDescription')}
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            {t('WelcomeMotivation')}
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            {t('ProjectClarification')}
          </Typography>
        </Box>
      </div>
    </NavLayout>
  )
}

LandingPage.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
}

export default compose(withStyles(styles), withTranslation())(LandingPage);