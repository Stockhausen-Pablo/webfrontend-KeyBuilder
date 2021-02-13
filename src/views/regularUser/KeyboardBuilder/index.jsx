import {withStyles} from '@material-ui/core';
import styles from './styles'
import {compose} from 'recompose';
import {withTranslation} from 'react-i18next';

function KeyboardBuilder(props){
    return(
        <div>
            <p>Test</p>
        </div>
    )
}

export default compose(withStyles(styles), withTranslation())(KeyboardBuilder);