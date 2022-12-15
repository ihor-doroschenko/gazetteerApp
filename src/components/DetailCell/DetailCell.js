import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ValueCell from './ValueCell/ValueCell';
import ValueCellTree from './ValueCell/ValueCellTree';

// Wrapper component to contain cell with attribute value of the entity (for collapsed or expanded the Cell component is used, for those attribute values that are not longer than the limit, the ValueCellTree component)

const DetailCell = ({ values, valuesLength, limit, expanded, callback }) => {
  return (
    <>
      {valuesLength > limit ? (
        !expanded ? (
          <ValueCell
            values={values.slice(0, limit)}
            icon={faCaretDown}
            callback={callback}
            tooltipText='tt_expand_details_attribute'
            text='expand'
          />
        ) : (
          <ValueCell
            values={values}
            icon={faCaretUp}
            callback={callback}
            tooltipText='tt_collapse_details_attribute'
            text='collapse'
          />
        )
      ) : (
        <span>
          <ValueCellTree data={values} />
        </span>
      )}
    </>
  );
};

export default DetailCell;
