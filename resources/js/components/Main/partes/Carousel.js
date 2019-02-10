import React, { Component } from 'react'
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="row pt-5 pb-3"><div className="col-12">
            <div id="carouselBody" className="carousel slide " role="listbox" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselBody" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselBody" data-slide-to="1"></li>
                    <li data-target="#carouselBody" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src="/img/1.jpg" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Title</h5>
                            <p>Contenu</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/2.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/3.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselBody" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselBody" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div></div>);
    }
}
 
export default Carousel;