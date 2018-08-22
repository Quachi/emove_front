import React, { Component } from 'react';
import Request from 'superagent';
import Vehicule from './Vehicule'

class DetailVehicule extends Component {

  constructor(props) { 
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var url = "http://localhost:8080/api/cars/"+this.props.id;
    Request
      .get(url)
      .auth('ipssi', 'ipssi')
      .then((response) => {
        // console.log(response);
        this.setState({
          vehicleModel: response.body.model,
          indexPrice: response.body.index_price,
          type: response.body.type.name,
          brand: response.body.brand,
          nbDoors: response.body.nb_doors,
          nbSeets: response.body.nb_seets
        })
      })
  }
  render() {
    return (
      <div className="DetailVehicule">
        <h1>Detail d'un Vehicule</h1>
        <Vehicule
          model= {this.state.vehicleModel}
          priceHour= {this.state.indexPrice}
          priceDay= {this.state.indexPrice}
          img="/images/vw-polo-5d-schwarz-2016.png"
          type={this.state.type}
          brand={this.state.brand}
          nb_doors={this.state.nbDoors}
          nb_seets={this.state.nbSeets}
        >
        </Vehicule>
      </div>
    );
  }
}

export default DetailVehicule;
