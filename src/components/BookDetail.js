import React, { Component } from 'react';

const BookDetail = props => {
  console.log(props);
  return (
    <div className="details">
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </div>
  );
};

export default BookDetail;
