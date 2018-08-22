import React, { Component } from 'react';
import Vehicule from './Vehicule';
import Request from 'superagent';
import _ from 'lodash';

class ListCars extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    var url = "http://localhost:8080/api/cars";
    Request
      .get(url)
      .auth('ipssi', 'ipssi')
      .then((response) => {
        // console.log(response);
        this.setState({
          cars: response.body
        })
      })
  }

  render() {
    var cars = _.map(this.state.cars, car => {
      console.log(car);
      return <li>
        <Vehicule
          model= {car.model}
          priceHour= {car.index_price}
          priceDay= {car.index_price}
          img="/images/vw-polo-5d-schwarz-2016.png"
          type={car.type}
          brand={car.brand}
          nb_doors={car.doors}
          nb_seets={car.seets}
        >
        </Vehicule>
      </li>;
    });

    return (
      <div className="RentCar">
        <h1>Liste de voiture</h1>
        { cars }
      </div>
    );
    // return (
    //   <div className="RentCar">
    //     <h1>RentCar Component</h1>



    //   </div>
    // );
  }
}

export default ListCars;
