import React, { Component } from 'react';
import { Grid, Col, Button} from 'react-bootstrap'
import '../App.css'

class Vehicule extends Component {
    constructor(props) {
        super(props);
    }

    redirect = () => {
        console.log(this.props.id)
        this.props.history.push('/detail/1')
    }
    
    render() {
        return (
            <div className="Vehicule">
                <Grid>
                    <Col xs={12} md={4} lg={4} >
                        <img src={this.props.img} alt="img_car" />
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className="vehicule-detail">
                            <h1>{this.props.model}</h1>
                            <h4>{this.props.type}</h4>
                            <h4>{this.props.brand}</h4>
                            <h4>{this.props.nb_doors} porte</h4>
                            <h4>{this.props.nb_seets} place</h4>
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={4} className='price'>
                        <div className="price-by-hour">
                            {this.props.priceHour}€ par heure
                        </div>
                        <div className="price-by-day">
                            {this.props.priceDay}€ par jour
                        </div>
                        <Button href="detail/">Reserver</Button>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default Vehicule;
