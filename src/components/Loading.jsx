import React from 'react';
import './Loading.css'

export const WeaveSpinner = () => {
  return (
    <>
      <style>
        {`
          
        `}
      </style>
      <div className="spinner-wrapper">
        <div className="spinner-container">
          <div className="thread t1" />
          <div className="thread t2" />
          <div className="thread t3" />
          <div className="thread t4" />
          <div className="node" />
          <h2 className="text">Loading...</h2>
        </div>
      </div>
    </>
  );
}

