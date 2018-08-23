import React, { Component } from 'react';
import Request from 'superagent';
import { Grid, Col, Button} from 'react-bootstrap'
import _ from 'lodash';

class ListScooter extends Component {

  constructor(props){
    super(props);
    this.state = {};

    var url = "http://localhost:8080/api/scooters/";
    Request
        .get(url)
        .auth('ipssi', 'ipssi')
        .then((response) => {
          this.setState({
              scooters: response.body
          })
    })
  }

  render() {

    var output = _.map(this.state.scooters ,(scooter) => {
      return <a href={"/vehicule/" + scooter.id}> 
        <p> {scooter.brand} - {scooter.model} </p>
      </a>;
    });

    return (
      <div>
          { output }
        <a href={"/vehicle/add"}> <Button> Ajouter </Button> </a>
      </div>
    );
  }
}

export default ListScooter;
