import { withReactMemo } from 'HOCs/withReactMemo';
import React, { useState } from 'react';
import CellClasses from './Cell/Cell.module.css';
import DetailCell from './DetailCell.js';

const DetailCellWrapper = ({ values, limit }) => {
  const valuesLength = Array.isArray(values) ? values.length : 1;
  const [expanded, setExpanded] = useState(valuesLength > limit ? false : true);
  const toogleTruncate = () => {
    setExpanded(expanded => !expanded);
  };
  return (
    <div className={CellClasses.namesBreaks}>
      <DetailCell
        valuesLength={valuesLength}
        values={values}
        limit={limit}
        expanded={expanded}
        callback={toogleTruncate}
      />
    </div>
  );
};

export default withReactMemo(DetailCellWrapper);
