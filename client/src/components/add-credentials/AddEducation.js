import React from 'react';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import Decorate from "../../HOCS/decorate";
import {addEducation as addEducationAction} from '../../actions/profileActions';


const AddEducation = (props) => {
  const {
    onSubmit,
    onCheck,
    onChange,
    data
  } = props;


  return (
    <div className="add-education">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Education</h1>
            <p className="lead text-center">Add any school, bootcamp, etc that you have
              attended</p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="* school"
                name="school"
                onChange={onChange}
                error={data.errors.school || null}
              />
              <TextFieldGroup
                placeholder="* Degree or Certification"
                name="degree"
                onChange={onChange}
                error={data.errors.degree || null}
              />
              <TextFieldGroup
                placeholder="* Field of Study"
                name="fieldofstudy"
                onChange={onChange}
                error={data.errors.fieldofstudy || null}
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
                  Current School
                </label>
              </div>
              <TextAreaFieldGroup
                placeholder="Program Description"
                name="description"
                onChange={onChange}
                error={data.errors.description || null}
                info="Tell us about the program that you were in"
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

AddEducation.propTypes = {
  addFunction: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default compose(
  connect(mapStateToProps, {addFunction: addEducationAction}),
  Decorate
)(AddEducation);