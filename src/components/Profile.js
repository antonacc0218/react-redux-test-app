import React from 'react';
import ErrorMsg from './ErrorMsg';

const rearrangeLinks = link => {
  return link.label === 'web' ? -1 : 1;
}

const Profile = ({ user, error, isFetching }) => {
  if (isFetching)
    return <div>Loading user data...</div>;
  else if (error)
    return <ErrorMsg text={error} />;
  else if (user)
    return (
      <div>
        <p>City: {user.city}</p>
        <p>Languages:</p>
        <ul>
          {user.languages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
        <p>Links:</p>
        <ul>
          {user.social.slice().sort(rearrangeLinks).map((link, i) => (
            <li key={i}>
              <a href={link.link} target="_blank">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  else
    return null;
}

export default Profile;
