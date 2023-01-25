import React from 'react';

const Child = ({rabeb}) => {
  return (
    <div style={{backgroundColor:"pink", padding:'50px', border:'2px solid black'}}>
      <h1>{rabeb.name}</h1>
      <h1>{rabeb.course}</h1>
    </div>
  );
}

export default Child;
