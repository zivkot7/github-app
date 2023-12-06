import React from 'react';
import PropTypes from 'prop-types';

function UserDetails({ avatarUrl, name, location, bio }) {
  return (
    <div>
      <h2>User Details</h2>
      <img src={avatarUrl} alt="Avatar" />
      <h3>Name: {name}</h3>
      <p>Location: {location}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

UserDetails.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserDetails;