import React, { Component } from 'react';
import Vehicule from './Vehicule'
class RentScoot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="RentScoot">
        <h1>Liste des scooters</h1>
        <Vehicule
          id = "50"
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

export default RentScoot;
