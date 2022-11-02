import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import {
  LandingPageRegularUser,
  ModelBuilderRegularUser
} from './views/regularUser';

import {compose} from 'recompose';


function Routes(props){
  //props later logged in /out
  return(
    <Switch>
      <Route
        component={LandingPageRegularUser}
        exact
        path="/"
      />
      <Route
        component={ModelBuilderRegularUser}
        exact
        path="/builder"
      />
    </Switch>
  )
}

export default compose(withRouter)(Routes);
