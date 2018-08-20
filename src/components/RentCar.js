import React, { Component } from 'react';
import Vehicule from './Vehicule';

class RentCar extends Component {
  render() {
    return (
      <div className="RentCar">
        <h1>RentCar Component</h1>
        <Vehicule
          model="C3"
          priceHour="13"
          priceDay="15"
          img="/images/vw-polo-5d-schwarz-2016.png"
          type="economique"
          brand="Citroen"
          nb_doors="5"
          nb_seets="5"
        >
        </Vehicule>
        <Vehicule
          model="C3"
          priceHour="13"
          priceDay="15"
          img="/images/vw-polo-5d-schwarz-2016.png"
          type="economique"
          brand="Citroen"
          nb_doors="5"
          nb_seets="5"
        >
        </Vehicule>
      </div>
    );
  }
}

export default RentCar;
