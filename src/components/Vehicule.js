import React, { Component } from 'react';

class Vehicule extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="Vehicule">
                {this.props.name}
                <div>
                    {this.props.priceHour}/h
                </div>
                <div>
                    {this.props.priceDay}/j
                </div>
                <button>Reserver</button>
            </div>
        );
    }
}

export default Vehicule;
