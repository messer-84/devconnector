import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withUserForm from '../../hocs/withUserForm';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import {addExperience as addExperienceAction} from '../../actions/profileActions';

const initialExperienceState = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false
  };

function AddExperience ({data, onSubmit, onCheck, onChange}) {
  const state = data;
  console.log(onSubmit);

  console.log('state', state);
  // constructor(props){
  //   super(props);
  //   this.state = props.data;
  // }
  // onSubmit = e => {
  //   props.onSubmit(e);
  // };
  // state = {
  //   company: '',
  //   title: '',
  //   location: '',
  //   from: '',
  //   to: '',
  //   current: false,
  //   description: '',
  //   errors: {},
  //   disabled: false
  // };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({errors: nextProps.errors});
  //   }
  // }


  // onSubmit = e => {
  //   e.preventDefault();

    // const {company, title, location, from, to, current, description} = this.state;

    // const expData = {
    //   company,
    //   title,
    //   location,
    //   from,
    //   to,
    //   current,
    //   description
    // };

    // this.props.addExperience(this.state, this.props.history);

  // };

  // onChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };
  //
  // onCheck = () => {
  //   this.setState({
  //     disabled: !this.state.disabled,
  //     current: !this.state.current
  //   });
  // };





    const {
      company,
      title,
      location,
      from,
      to,
      current,
      description,
      errors,
      disabled
    } = state;
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
                  value={company}
                  onChange={onChange}
                  error={errors.company}
                />
                <TextFieldGroup
                  placeholder="* Job Title"
                  name="title"
                  value={title}
                  onChange={onChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder="location"
                  name="location"
                  value={location}
                  onChange={onChange}
                  error={errors.location}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={from}
                  onChange={onChange}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  value={to}
                  onChange={onChange}
                  error={errors.to}
                  disabled={disabled ? 'disabled' : ''}
                />
                <div className="form-check mb-4 ml-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={current}
                    checked={current}
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
                  value={description}
                  onChange={onChange}
                  error={errors.description}
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

}

AddExperience.propTypes = {
  addExperienceAction: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  data: initialExperienceState
});

export default connect(mapStateToProps, {addExperienceAction})(
  withRouter(withUserForm(addExperienceAction)(AddExperience))
);