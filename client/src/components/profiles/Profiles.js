import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
// import {getProfiles} from '../../actions/profileActions';
import {setProfilesSuccess} from '../../sagas/fetchAllProfiles';

class Profiles extends Component {

  componentDidMount(){
    console.log('from profiles did mount');
    this.props.onGetProfiles();
  }

  render() {
    console.log('Profiles page');
    console.log('props', this.props);


    const { profiles, loading } = this.props.profiles;
    let profileItems;

    if(profiles === null || loading){
      profileItems = <Spinner/>;
    } else{
      if(profiles.length > 0){
        profileItems = profiles.map(profile => (
            <ProfileItem key={profile._id} profile={profile} />
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
  onGetProfiles: propTypes.func.isRequired,
  profiles: propTypes.object.isRequired
};


const mapStateToProps = state => ({
  profiles: state.profile
});

const mapDispatchToProps = dispatch => ({
  onGetProfiles: () => dispatch(setProfilesSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);