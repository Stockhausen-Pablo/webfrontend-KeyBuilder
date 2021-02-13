import React from "react";
import {withStyles} from '@material-ui/core';
import styles from './styles'
import {compose} from 'recompose';
import {withTranslation} from 'react-i18next';

import {KeyboardBuilder} from '../../../components';

function ModelBuilder(props){
    return(
        <KeyboardBuilder/>
    )
}

export default compose(withStyles(styles), withTranslation())(ModelBuilder);