import React from 'react';
import { parseToHTML } from 'utils/Parsing/parseToHTML';

const DetailValue = ({ value }) => {
  return <>{typeof value === 'string' ? parseToHTML(value) : value}</>;
};

export default DetailValue;
