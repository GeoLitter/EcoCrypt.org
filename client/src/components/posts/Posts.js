import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions'; 
import { getProfiles } from '../../actions/profileActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getProfiles();
    this.props.getPosts(); 
  }

  render() {
    const { posts, loading } = this.props.post; 
    const { profiles } = this.props.profile;

    
     
    let postContent;

    if (posts === null || profiles == null || loading) {
      postContent = <Spinner />;
    } else {  
      if (profiles.length > 0) { 
        postContent = profiles.map(profile => (
        <PostFeed key={profile._id} posts={posts} profile={profile} />
        
        ));  
      } else {
        console.log("no profiles");
      }
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              <br/>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  profile: state.profile
});

export default connect(mapStateToProps, {getProfiles, getPosts })(Posts);
