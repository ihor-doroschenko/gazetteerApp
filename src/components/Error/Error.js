import React from 'react';
import ErrorClasses from './Error.module.css';

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
