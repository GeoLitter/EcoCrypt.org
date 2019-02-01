import React, { Component } from 'react';
import Search from './Search';
import Map from './Maps';

class Observations extends Component {
    render(){
        return(
            <div className="container">
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