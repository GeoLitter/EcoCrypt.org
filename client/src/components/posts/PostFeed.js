import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts, profiles} = this.props;  
     //TODO: Need to optimize mapping through the profiles here instead of Post.js. The profile is being passed down for each post
    return posts.map(post => 
    <PostItem key={post._id} post={post} profiles={profiles}/>
    ); 
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
  profiles: PropTypes.array.isRequired
};

export default PostFeed;
