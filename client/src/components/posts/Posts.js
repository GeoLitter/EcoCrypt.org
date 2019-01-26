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
    // const { profiles } = this.props.profile;
 
     
    let postContent;
 
    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {  
        postContent = <PostFeed posts={posts} />   
    }

    return (
      <div className="feed">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
            <div className="sticky-top">
              <div className="jumbotron">
                <h1>Profile Content</h1>
              </div>
              <hr className="my-4"></hr>
            </div>
            </div>
            <div className="col-6" style={{backgroundColor: "#f4f9fc"}}>
              <PostForm />
              <br/>
              {postContent}
            </div>
            <div className="col-3">
            <div className="sticky-top">
            <div className="jumbotron ">
                  <h1>Map Content</h1>
              </div>
              <hr className="my-4"></hr>
              <div className="jumbotron ">
                  <h1>latest news</h1>
              </div>
            </div>
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
