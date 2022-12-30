import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';
import ValueCellTree from '../ValueCellTree';

// Wrapper component to represent attribute value if it is an array

const ValueCellTreeForArray = ({ data }) => {
  return (
    <>
      {data.map(item => {
        return (
          <ValueCellTree key={getKey(JSON.stringify(item), 'ValueCellTreeForArray')} data={item} />
        );
      })}
    </>
  );
};
export default ValueCellTreeForArray;
