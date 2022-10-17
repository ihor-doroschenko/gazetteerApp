import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Cell from './Cell/Cell';
import CellTree from './Cell/CellTree';

const DetailCell = ({ values, valuesLength, limit, expanded, callback }) => {
  return (
    <>
      {valuesLength > limit ? (
        !expanded ? (
          <Cell
            values={values.slice(0, limit)}
            icon={faCaretDown}
            callback={callback}
            tooltipText='tt_expand_details_attribute'
            text='expand'
          />
        ) : (
          <Cell
            values={values}
            icon={faCaretUp}
            callback={callback}
            tooltipText='tt_collapse_details_attribute'
            text='collapse'
          />
        )
      ) : (
        <span>
          <CellTree data={values} />
        </span>
      )}
    </>
  );
};

export default DetailCell;
