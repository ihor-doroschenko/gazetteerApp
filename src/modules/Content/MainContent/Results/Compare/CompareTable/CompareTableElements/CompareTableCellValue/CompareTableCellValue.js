import { getOriginalMetaAttributes } from 'constants/getOriginalMetaAttributes';
import DetailCellWrapper from 'modules/Content/MainContent/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailValue/DetailCell/DetailCellWrapper';
import React from 'react';
import CompareTableCellValueClasses from './CompareTableCellValue.module.css';

const CompareTableCellValue = ({ value, attribute, gazName }) => {
  const originalAttribute = getOriginalMetaAttributes(attribute, gazName);
  return (
    <div className='namesBreaks'>
      <div className={CompareTableCellValueClasses.cellValue}>
        <DetailCellWrapper values={value || ''} limit={1} />
      </div>
      {value ? (
        <span className={CompareTableCellValueClasses.originalAttribute}>
          (
          <em>
            "{Array.isArray(originalAttribute) ? originalAttribute.join('; ') : originalAttribute}"
          </em>
          )
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default CompareTableCellValue;
