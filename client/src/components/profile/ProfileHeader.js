import React from 'react';
import isEmpty from '../../validation/is-empty';
import PropTypes from 'prop-types';

const ProfileHeader = props => {
  const {profile} = props;
  const {
    user,
    status,
    company,
    location,
    website,
    social
  } = profile;
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-info text-white mb-3">
          <div className="row">
            <div className="col-4 col-md-3 m-auto">
              <img
                className="rounded-circle"
                src={user.avatar}
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-4 text-center">{user.name}</h1>
            <p className="lead text-center">
              {status}
              {!isEmpty(company) && (<span> at {company}</span>)}
            </p>
            {!isEmpty(location) && <p>{location}</p>}
            <p>
              {!isEmpty(website) &&
              (<a className="text-white p-2"
                  href={website}
                  target="_blank">
                <i className="fas fa-globe fa-2x"/>
              </a>)}

              {!isEmpty(social && social.twitter) &&
              (<a className="text-white p-2"
                  href={social.twitter}
                  target="_blank">
                  <i className="fab fa-twitter fa-2x"/>
                </a>)}
              {!isEmpty(social && social.facebook) && (
                <a className="text-white p-2"
                  href={social.facebook}
                  target="_blank">
                  <i className="fab fa-facebook fa-2x"/>
                </a>)}

              {!isEmpty(social && social.linkedin) && (
                <a className="text-white p-2"
                  href={social.linkedin}
                  target="_blank">
                  <i className="fab fa-linkedin fa-2x"/>
                </a>)}

              {!isEmpty(social && social.youtube) && (
                <a className="text-white p-2"
                  href={social.youtube}
                  target="_blank">
                  <i className="fab fa-youtube fa-2x"/>
                </a>)}

              {!isEmpty(social && social.instagram) && (
                <a className="text-white p-2"
                  href={social.instagram}
                  target="_blank">
                  <i className="fab fa-instagram fa-2x"/>
                </a>)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileHeader;