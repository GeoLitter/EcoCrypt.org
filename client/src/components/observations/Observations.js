import React, { Component } from 'react';
import Search from './Search';
import Map from './Maps';
import { Helmet } from 'react-helmet';

class Observations extends Component {
    render(){
        return(
            
            <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Observations | EcoCrypt.org</title> 
                <meta name="description" content="See all reported content visualized in a map" />
            </Helmet>
                <div className="row">
                    <Search/>
                </div> 
                <div>
                     <Map/> 
                </div>
            </div>
        );
    }
}

export default Observations;