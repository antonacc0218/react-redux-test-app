import React from 'react';

const ErrorMsg = ({ text }) => {
  const mappings = {
    'wrong_email_or_password': 'Invalid credentials.',
    'user_not_found': 'User is not found.'
  };

  const message = mappings[text];
  if (message) {
    return (
      <div>Error: {message}</div>
    );
  }
  else
    return null;
}

export default ErrorMsg;
