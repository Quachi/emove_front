import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

class Agency extends Component {

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
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
      return <li> {agency.name} </li>;
    });
    return (
      <div className="Home">
        <h1>Agencies</h1>
        { agencies }
      </div>
    );
  }
}

export default Agency;
