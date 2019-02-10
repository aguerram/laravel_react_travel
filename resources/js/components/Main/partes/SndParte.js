import React, { Component } from 'react'

class SndParte extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <div>
                <div className="row align-items-center">
                    <div className="col">
                        <p>Les Places touristiques : </p>
                    </div>
                    <div className="col">
                        <input className="form-control" placeholder="Rechercher..."></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                            <p>Takimata eirmod justo et takimata sanctus et dolores duo, dolore et eos magna sadipscing, labore dolor lorem sit elitr dolor, sed aliquyam no ipsum est clita diam amet, ea lorem sea diam sea ea et vero duo aliquyam, lorem erat ipsum nonumy amet gubergren no, stet elitr et dolore lorem, et sadipscing amet et gubergren stet sed. Sanctus eos sea.</p>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="card">
                                <span className="text-center text-underline"><b>Commentaires</b></span>
                                <hr></hr>
                                <div className="card-body">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card" >
                            <div id="map-view"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SndParte;