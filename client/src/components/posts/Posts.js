import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import {getPosts} from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const {posts, loading} = this.props.post;

    const postContent = posts === null || loading
      ? <Spinner/>
      : <PostFeed posts={posts}/>;


    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm/>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Posts.propTypes = {
  post: propTypes.object.isRequired,
  getPosts: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, {getPosts})(Posts);