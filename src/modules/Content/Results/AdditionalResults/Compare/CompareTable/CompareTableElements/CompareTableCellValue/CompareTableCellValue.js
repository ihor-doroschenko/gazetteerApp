import DetailCellWrapper from 'components/DetailCell/DetailCellWrapper';
import { getOriginalMetaAttributes } from 'constants/getOriginalMetaAttributes';
import React from 'react';
import CompareTableCellValueClasses from './CompareTableCellValue.module.css';
import OriginalAttribute from './OriginalAttribute/OriginalAttribute';

// Wrapper component to contain cell of the attribute value in the compare table

const CompareTableCellValue = ({ value, attribute, gazName }) => {
  const originalAttribute = getOriginalMetaAttributes(attribute, gazName);
  return (
    <div className='namesBreaks'>
      <div className={CompareTableCellValueClasses.cellValue}>
        <DetailCellWrapper values={value || ''} limit={1} />
      </div>
      {value ? <OriginalAttribute originalAttribute={originalAttribute} /> : ''}
    </div>
  );
};

export default CompareTableCellValue;
