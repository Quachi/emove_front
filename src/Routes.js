import React, { Component } from 'react';
import { Locations, Location, NotFound } from "react-router-component";
import Login from './components/Login';
import NotFoundPage from './NotFoundPage'
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Register from './components/Register';
import ListScooter from './components/ListScooter';
import Agencies from './components/Agencies';
import Agency from './components/Agency';
import VehicleAdd from './components/VehicleAdd';


class Routes extends Component {

  
  render() {
    return (
      <Locations>
        <Location path="/" handler={Home} />
        <Location path="/login" handler={Login} />
        <Location path="/account" handler={MyAccount} />
        <Location path="/register" handler={Register} />

        <Location path="/vehicle/add" handler={VehicleAdd} />

        <Location path="/scooters" handler={ListScooter} />

        <Location path="/agencies" handler={Agencies} />
        <Location path="/agencies/:id" handler={Agency} />

        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
}

export default Routes;
