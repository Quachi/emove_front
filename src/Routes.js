import React, { Component } from 'react';
import { Locations, Location, NotFound } from "react-router-component";
import Login from './components/Login';
import NotFoundPage from './NotFoundPage'

class Routes extends Component {
  render() {
    return (
      <Locations>
        <Location path="/" handler={Login} />
        <Location path="/login" handler={Login} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
}

export default Routes;
