import React, { Component } from 'react'
import Carousel from './partes/Carousel';
import SndParte from './partes/SndParte';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
        <div className="container">
            <Carousel/>
            <SndParte/>
        </div>);
    }
}
 
export default Body;