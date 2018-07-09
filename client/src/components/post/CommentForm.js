import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import {addComment} from '../../actions/postActions';

class CommentForm extends Component {
  state = {
      text: '',
      errors: {}
  };

  componentWillReceiveProps(newProps){
    if(newProps.errors){
      this.setState({errors: newProps.errors})
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const {user} = this.props.auth;
    const {postId, addComment, text} = this.props;

    const newComment = {
      text,
      name: user.name,
      avatar: user.avatar
    };

    addComment(postId, newComment);
    this.setState({text: ''})
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {errors, text} = this.state;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Make a comment</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  placeholder="Reply to post"
                  name="text"
                  value={text}
                  onChange={this.onChange}
                  error={errors.text}
                />
              </div>
              <button className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

CommentForm.propTypes = {
  auth: propTypes.object.isRequired,
  postId: propTypes.string.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {addComment})(CommentForm);