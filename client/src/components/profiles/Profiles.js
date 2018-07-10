import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import propTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import {fetchedProfiles} from '../../actions/profilesActions';

class Profiles extends Component {

  componentDidMount() {
    console.log('from profiles did mount');
    this.props.onFetchProfiles();
  }

  render() {
    const {profiles, loading} = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner/>;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile}/>
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profiles.propTypes = {
  onFetchProfiles: propTypes.func.isRequired,
  profile: propTypes.object.isRequired
};


const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {onFetchProfiles: fetchedProfiles},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);