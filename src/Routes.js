import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LazyLoad from "./utils/LazyLoad";

const Test = (props) => <LazyLoad component={React.lazy(() => import(/* webpackChunkName: "Test" */ './scenes/Test'))} {...props} />;
export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/test" component={Test} />
      </Switch>
    );
  }
}
