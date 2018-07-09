import React, { Component } from 'react';
import Vehicule from './Vehicule';

class RentCar extends Component {
  render() {
    return (
      <div className="RentCar">
        <h1>RentCar</h1>
        <Vehicule name="Citroen" priceHour="13" priceDay="15"></Vehicule>
      </div>
    );
  }
}

export default RentCar;
