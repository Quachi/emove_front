import React, { Component } from 'react';
import { Locations, Location, NotFound } from "react-router-component";
import Login from './components/Login';
import NotFoundPage from './NotFoundPage'
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Register from './components/Register';
import ListCars from './components/ListCars';
import RentScoot from './components/RentScoot';
import Vehicule from './components/Vehicule';
import Agency from './components/Agency';
import DetailVehicule from './components/DetailVehicule';

class Routes extends Component {
  render() {
    return (
      <Locations>
        <Location path="/" handler={Home} />
        <Location path="/login" handler={Login} />
        <Location path="/account" handler={MyAccount} />
        <Location path="/register" handler={Register} />
        <Location path="/rent-car" handler={ListCars} />
        <Location path="/rent-scoot" handler={RentScoot} />
        <Location path="/vehicule" handler={Vehicule} />
        <Location path="/vehicle/add" handler={VehicleAdd} />
        <Location path="/scooters" handler={ListScooter} />
        <Location path="/agencies" handler={Agency} />
        <Location path="/agencies/:id" handler={Agency} />
        <Location path="/detail/:id" handler={DetailVehicule} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
}

export default Routes;
