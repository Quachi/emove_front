import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

class Agency extends Component {

  constructor(props){
    super(props);
    this.state = {};

    var url = "http://localhost:8080/api/agency/" + this.props.id;
    Request
        .get(url)
        .auth('ipssi', 'ipssi')
        .then((response) => {
          this.setAgencyState(response.body);
    })  
  }

  setAgencyState(agency){
    this.setState({
      agencyName : agency.name,
      agencyPostalCode : agency.postal_code,
      agencyCity : agency.city,
      agencyVehicles: agency.vehicles
    })
  }

  render() {

    var vehicles = _.map(this.state.agencyVehicles ,(vehicle) => {
      return <a href={"/car/" + vehicle.id}> 
        <p> {vehicle.brand} - {vehicle.model} </p>
      </a>;
    });

    return (
      <div>
        <h2> {this.state.agencyName} </h2>
        <ul>
          <li> Postal code : {this.state.agencyPostalCode} </li>
          <li> City: {this.state.agencyCity} </li>
        </ul>
        <h3> Vehicles : </h3>
        {vehicles}        
      </div>
    );
  }
}

export default Agency;
