import React from 'react';

const News = ({ data, error, isFetching }) => {
  if (isFetching)
    return <div>Loading news...</div>;

  if (error)
    return <div>{error}</div>;

  if (data.length)
    return (
      <div>
        {
          data.map(newsItem => (
            <div key={newsItem.id}>
              <h2>{newsItem.title}</h2>
              <p>{newsItem.text}</p>
            </div>
          ))
        }
        <p>Total news items: {data.length}</p>
      </div>
    );
  else
    return (
      <div>There are no news yet...</div>
    );
}

export default News;