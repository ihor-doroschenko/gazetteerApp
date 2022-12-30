import React from 'react';
import ErrorClasses from './Error.module.css';

// Component for representation of failed requests for the result and detail tables

const Error = ({ text, item }) => {
  return (
    <div className={ErrorClasses.error}>
      <p>
        Error occured {text} for {item} while requesting data
      </p>
    </div>
  );
};

export default Error;
