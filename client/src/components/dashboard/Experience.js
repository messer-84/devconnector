import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import Moment from 'react-moment';
import {deleteExperience} from '../../actions/profileActions';


const Experience = (props) => {
  this.onDeleteClick = id => () => {
    props.deleteExperience(id);
  };


  const experience = props.experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {' '}
        {exp.to === null ? ('Now') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={this.onDeleteClick(exp._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h4 className="mb-4">Experience Credentials</h4>
      <table className="table">
        <thead>
        <tr>
          <th>Company</th>
          <th>Title</th>
          <th>Years</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {experience}
        </tbody>
      </table>
    </div>
  )

};

Experience.propTypes = {
  deleteExperience: propTypes.func.isRequired,

};

export default connect(null, {deleteExperience})(Experience);