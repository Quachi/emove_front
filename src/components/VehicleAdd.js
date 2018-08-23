import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

class VehicleAdd extends Component {

  constructor(){
    super();
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        var url = "http://localhost:8080/api/scooter"
        var body = {
            brand: this.state.brand,
            model: this.state.model,
            color: this.state.color,
            mileage: this.state.mileage,
            number_plate: this.state.nbplate,
            vehicle_condition: this.state.condition,
            nb_doors: this.state.doors,
            nb_seats: this.state.seats,
            index_price: this.state.price
        }
        Request
            .post(url)
            .auth('ipssi', 'ipssi')
            .send('vehicle', body)
            .then((response) => {
                console.log(response);
        })
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <h2> Ajouter un vehicule </h2>
        <form onSubmit={this.handleSubmit}>

            <label> Marque : <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange} /> </label><br/>
            <label> Modèle : <input type="text" name="model" value={this.state.model} onChange={this.handleChange} /> </label><br/>
            <label> Couleur : <input type="text" name="color" value={this.state.color} onChange={this.handleChange} /> </label><br/>
            <label> Kilométrage : <input type="text" name="mileage" value={this.state.mileage} onChange={this.handleChange} /> </label><br/>
            <label> Immatriculation : <input type="text" name="nbplate" value={this.state.nbplate} onChange={this.handleChange} /> </label><br/>
            <label> Condition : <input type="text" name="condition" value={this.state.condition} onChange={this.handleChange} /> </label><br/>
            <label> Nombre de portes : <input type="text" name="doors" value={this.state.doors} onChange={this.handleChange} /> </label><br/>
            <label> Nombre de places : <input type="text" name="seats" value={this.state.seats} onChange={this.handleChange} /> </label><br/>
            <label> Index prix : <input type="text" name="price" value={this.state.price} onChange={this.handleChange} /> </label><br/>

            <label>
                Type : 
                <select name="type" value={this.state.type} onChange={this.handleChange}>
                    <option value="5">Scooter</option>
                    <option value="1">Voiture (économique)</option>
                    <option value="2">Voiture (compact)</option>
                    <option value="4">Voiture (grande)</option>
                    <option value="3">Voiture (moyenne)</option>
                </select>
            </label>
            <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default VehicleAdd;
