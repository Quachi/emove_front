import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

class Agencies extends Component {

  constructor(){
    super();
    this.state = {};

    var url = "http://localhost:8080/api/agencies";
    Request
        .get(url)
        .auth('ipssi', 'ipssi')
        .then((response) => {
            this.setState({
            agencies: response.body
        })
    })
  }

  render() {
    var agencies = _.map(this.state.agencies ,(agency) => {
      return <a href={"agencies/" + agency.id}> <li> {agency.name} </li> </a>;
    });
    
    return (
      <div className="Home">
        <h1>Agences</h1>
        { agencies }
      </div>
    );
  }
}

export default Agencies;
