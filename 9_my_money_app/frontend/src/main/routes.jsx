import React from "react";
import { Switch, Route, Redirect } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCyle/billingCycle";

export default (props) => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/billingCycles'component={BillingCycle} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>


  // <Router history={hashHistory}>
  //   <Route path="/" component={AuthOrApp}>
  //     <IndexRoute component={Dashboard} />
  //     <Route path="/billingCycles" component={BillingCycle} />
  //   </Route>
  //   <Redirect from="*" to="/" />
  // </Router>
);
