import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push('/dashboard');
    // }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center"> 
                <img style={{width: 150, marginTop: '3em'}} src="/logo_transparent.png"/> 
                <p className="lead"> 
                  Create a Researcher profile/portfolio, share posts and help report illegal environmental activities.
                </p>
                <br/>
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center"> 
              <br/>
              <br/>
                <a rel="noopener noreferrer" href="https://github.com/lmanzanero/EcoCrypt.org" target="_blank" className="btn btn-lg btn-dark mr-2">
                    <span className="fab fa-github"></span>  Contribute on GitHub
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
