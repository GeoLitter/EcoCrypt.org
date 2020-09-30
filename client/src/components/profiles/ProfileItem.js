import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty'; 

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (  
        <div className="col-xl-4 m-auto order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <Link to={`/profile/${profile.handle}`}>
                    <img src={profile.profileImg || profile.user.avatar} className="rounded-circle"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" className="btn btn-sm btn-dark float-right">Message</a>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-0">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Friends</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Photos</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  {profile.user.name}<span className="font-weight-light"></span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i> {isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>{profile.status}{' '} {isEmpty(profile.company) ? null : ( <i>at {profile.company}</i>)}
                </div>
                <div>
                  <i className="ni education_hat mr-2"></i><span>Education - "Not Available"</span>
                </div>
                <hr className="my-4"/>
                {/* <div classNameName="col-md-12 d-none d-md-block">
                  <h4>Skill Set</h4>
                  <ul classNameName="list-group">
                      {profile.skills.slice(0, 4).map((skill, index) => (
                      <li key={index} classNameName="list-group-item">
                        <i classNameName="fa fa-check pr-1" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div> */}
                <Link to={`/profile/${profile.handle}`} className="btn btn-outline-info">
                   View Profile
                </Link>
              </div>
            </div>
          </div>
        </div> 
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
