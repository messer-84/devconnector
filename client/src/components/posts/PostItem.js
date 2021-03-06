import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classnames from "classnames";
import {deletePost, addLike, removeLike} from '../../actions/postActions';

const PostItem = (props) => {
  const {
    post,
    auth,
    showActions,
    deletePost,
    addLike,
    removeLike
  } = props;

  this.onDeleteClick = id => () => deletePost(id);
  this.onLikeClick = id => () => addLike(id);
  this.onUnlikeClick = id => () => removeLike(id);
  this.findUserLike = likes => () => {
    return likes.filter(like => like.user === auth.user.id).length > 0;
  };

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-2">
          <a href="profile.html">
            <img
              className="rounded-circle d-none d-md-block"
              src={post.avatar}
              alt=""
            />
          </a>
          <br/>
          <p className="text-center">{post.name}</p>
        </div>
        <div className="col-md-10">
          <p className="lead">{post.text}</p>
          {showActions && (
            <span>
              <button
                onClick={this.onLikeClick(post._id)}
                type="button"
                className="btn btn-light mr-1"
              >
              <i
                className={classnames('fas fa-thumbs-up', {
                  'text-info': this.findUserLike(post.likes)
                })}
              />
              <span className="badge badge-light">{post.likes.length}</span>

              </button>
              <button
                onClick={this.onUnlikeClick(post._id)}
                type="button"
                className="btn btn-light mr-1"
              >
              <i className="text-secondary fas fa-thumbs-down"/>
              </button>
              <Link
                to={`/post/${post._id}`}
                className="btn btn-info mr-1"
              >
              Comments
              </Link>
              {post.user === auth.user.id && (
                <button
                  onClick={this.onDeleteClick(post._id)}
                  type="button"
                  className="btn btn-danger mr-1"
                >
                  <i className="fas fa-times"/>
                </button>
              )}
              </span>
          )}
        </div>
      </div>
    </div>

  )

};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: propTypes.func.isRequired,
  addLike: propTypes.func.isRequired,
  removeLike: propTypes.func.isRequired,
  post: propTypes.object.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {deletePost, addLike, removeLike})(PostItem);