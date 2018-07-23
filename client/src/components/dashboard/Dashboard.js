import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestProfile, deleteAccount} from "../../actions/profileActions";
import Spinner from '../common/Spinner';
import ProfileActivities from './ProfileActivities';
import Experience from './Experience';
import Education from './Education';
import {bindActionCreators} from "redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.requestProfile();
  }

  onDeleteClick = () => {
    this.props.deleteAccount();
  };

  render() {
    const {user} = this.props.auth;
    const {profile, loading} = this.props.profile;
    let dashboardContent;
    if (loading) {
      dashboardContent = <Spinner/>;
    } else {
      // Check if logged in user has profile data
      if (profile) {
        if (Object.keys(profile).length > 0) {
          dashboardContent = (
            <div>
              <p className="lead text-muted">
                Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
              </p>
              <ProfileActivities/>
              <Experience experience={profile.experience}/>
              <Education education={profile.education}/>
              <div style={{marginBottom: '60px'}}/>
              <button
                onClick={this.onDeleteClick}
                className="btn btn-danger"
              >
                Delete My Account
              </button>
            </div>
          )
        }
      }
      else {
        //User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please and some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  requestProfile: propTypes.func.isRequired,
  deleteAccount: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  profile: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestProfile,
      deleteAccount
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);