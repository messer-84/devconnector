import React from 'react';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import Decorate from '../../HOCS/decorate';
import {addExperience as addExperienceAction} from '../../actions/profileActions';


const AddExperience = (props) => {
  const {
    onSubmit,
    onCheck,
    onChange,
    data
  } = props;

  return (
    <div className="add-experience">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Experience</h1>
            <p className="lead text-center">Add any job or position that you have had in the past
              or current</p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="* Company"
                name="company"
                onChange={onChange}
                error={data.errors.company || null}
              />
              <TextFieldGroup
                placeholder="* Job Title"
                name="title"
                onChange={onChange}
                error= { data.errors.title || null }
              />
              <TextFieldGroup
                placeholder="location"
                name="location"
                onChange={onChange}
                error={data.errors.location || null}
              />
              <h6>From Date</h6>
              <TextFieldGroup
                name="from"
                type="date"
                onChange={onChange}
                error={data.errors.from || null}
              />
              <h6>To Date</h6>
              <TextFieldGroup
                name="to"
                type="date"
                onChange={onChange}
                error={data.errors.to || null}
                disabled={data.disabled ? 'disabled' : ''}
              />
              <div className="form-check mb-4 ml-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="current"
                  onChange={onCheck}
                  id="current"
                />
                <label htmlFor="current" className="form-check-label">
                  Current Job
                </label>
              </div>
              <TextAreaFieldGroup
                placeholder="Job Description"
                name="description"
                onChange={onChange}
                error={data.errors.description || null}
                info="Tell us about the position"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddExperience.propTypes = {
  addFunction: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export  default compose(
  connect(mapStateToProps, {addFunction: addExperienceAction}),
  Decorate
)(AddExperience);