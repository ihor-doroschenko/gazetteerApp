import { withReactMemo } from 'HOCs/withReactMemo';
import React, { useState } from 'react';
import DetailCell from './DetailCell.js';
import ValueCellClasses from './ValueCell/ValueCell.module.css';

// Wrapper component to control expanded/collapsed state for cell with attribute value of the entity

const DetailCellWrapper = ({ values, limit }) => {
  const valuesLength = Array.isArray(values) ? values.length : 1;
  const defaultExpandState = valuesLength > limit ? false : true;
  const [expanded, setExpanded] = useState(defaultExpandState);
  return (
    <div className={ValueCellClasses.namesBreaks}>
      <DetailCell
        valuesLength={valuesLength}
        values={values}
        limit={limit}
        expanded={expanded}
        callback={() => setExpanded(expanded => !expanded)}
      />
    </div>
  );
};

export default withReactMemo(DetailCellWrapper);
