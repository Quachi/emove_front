import React, { Component } from 'react';
import { Locations, Location, NotFound } from "react-router-component";
import Login from './components/Login';
import NotFoundPage from './NotFoundPage'
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Register from './components/Register';
import RentCar from './components/RentCar';
import RentScoot from './components/RentScoot';
import Vehicule from './components/Vehicule';

class Routes extends Component {
  render() {
    return (
      <Locations>
        <Location path="/" handler={Home} />
        <Location path="/login" handler={Login} />
        <Location path="/account" handler={MyAccount} />
        <Location path="/register" handler={Register} />
        <Location path="/rent-car" handler={RentCar} />
        <Location path="/rent-scoot" handler={RentScoot} />
        <Location path="/vehicule" handler={Vehicule} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
}

export default Routes;
