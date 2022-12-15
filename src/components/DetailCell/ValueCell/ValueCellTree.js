import React from 'react';
import ValueCellTreeForArray from './ValueCellTreeDataTypes/ValueCellTreeForArray';
import ValueCellTreeForObject from './ValueCellTreeDataTypes/ValueCellTreeForObject';
import ValueCellTreeForRest from './ValueCellTreeDataTypes/ValueCellTreeForRest';

// Wrapper component to represent attributes of different data types ("data types" not in classic JS, but rather in abstract sense). It includes array, object, string, falsy, or another (e.g. numeric) data types

const ValueCellTree = ({ data }) => {
  return (
    <div>
      {!data ? (
        ''
      ) : typeof data === 'object' ? (
        Array.isArray(data) ? (
          <ValueCellTreeForArray data={data} />
        ) : (
          <ValueCellTreeForObject data={data} />
        )
      ) : (
        <ValueCellTreeForRest data={data} />
      )}
    </div>
  );
};

export default ValueCellTree;
