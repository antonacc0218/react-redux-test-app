import React from 'react';

const rearrangeLinks = link => {
  return link.label === 'web' ? -1 : 1;
}

class Profile extends React.Component {
  render() {
    const { user, error } = this.props;

    if (error)
      return <div>An error occurred: {error}</div>;
    
    if (user)
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
            {user.social.sort(rearrangeLinks).map((link, i) => (
              <li key={i}>
                <a href={link.link} target="_blank">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    else
      return <div>Loading user data...</div>;
  }
}

export default Profile;
