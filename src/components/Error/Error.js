import React from 'react';
import ErrorClasses from './Error.module.css';

// Component for representation of failed requests for the result and detail tables

const Error = ({ text, item }) => {
  return (
    <div className={ErrorClasses.error}>
      <p>
        {text} for {item}
      </p>
    </div>
  );
};

export default Error;
