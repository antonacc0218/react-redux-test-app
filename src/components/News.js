import React from 'react';

const News = ({ data }) => {
  if (data.length)
    return (
      <ul>
        {
          data.map(newsItem => (
            <li>{newsItem.text}</li>
          ))
        }
      </ul>
    );
  else
    return (
      <div>There are no news yet...</div>
    );
}

export default News;