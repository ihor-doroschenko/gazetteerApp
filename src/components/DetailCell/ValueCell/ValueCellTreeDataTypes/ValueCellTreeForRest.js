import parse from 'html-react-parser';
import React from 'react';
import { parseLinkToHTML } from 'utils/Converting/parseLinkToHTML';

// Wrapper component to represent attribute value if it is a string or another type of data

const ValueCellTreeForRest = ({ data }) => {
  return <>{typeof data === 'string' ? parse(parseLinkToHTML(data)) : data}</>;
};
export default ValueCellTreeForRest;
