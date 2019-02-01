import React, { Component } from 'react';

class Search extends Component {
    render(){
        return(
            <form className="container-fluid">
                <h1>Observations</h1>
                <div className="row">
                    <div className="col-5">
                    <input type="text" className="form-control" placeholder="Report Catergory"/>
                    </div>
                    <div className="col-4">
                    <input type="text" className="form-control" placeholder="Location"/>
                    </div>
                    <div className="col-3">
                    <button type="submit" className="btn btn-primary mb-2">Search</button>
                    </div>
                </div>
             </form>
        );
    }
}

export default Search;