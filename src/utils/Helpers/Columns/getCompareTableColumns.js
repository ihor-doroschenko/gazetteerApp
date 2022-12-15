import CompareTableCellValue from 'modules/Content/Results/AdditionalResults/Compare/CompareTable/CompareTableElements/CompareTableCellValue/CompareTableCellValue';
import CompareTableGazHeader from 'modules/Content/Results/AdditionalResults/Compare/CompareTable/CompareTableElements/CompareTableGazHeader/CompareTableGazHeader';
import DetailAttribute from 'modules/Content/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailAttribute/DetailAttribute';
import React from 'react';
import ColumnsClasses from './Columns.module.css';

// Get columns for compare view

export const getCompareTableColumns = entitiesToCompare => {
  // Column with header "attribute" to contain attribute name
  let compareTableColumns = [
    {
      Header: <b>attribute</b>,
      accessor: 'attribute',
      Cell: props => <DetailAttribute attribute={props.original.attribute} />,
      className: ColumnsClasses.attributeHeader,
    },
  ];
  // Columns with headers of respective gazetteer names to contain attribute values of these gazetteers
  entitiesToCompare
    .filter(el => !el.loading)
    .forEach(el => {
      compareTableColumns = [
        ...compareTableColumns,
        {
          Header: <CompareTableGazHeader gazName={el.gazName} id={el.entity.id} />,
          accessor: el.gazName + el.entity.id,
          Cell: props => (
            <CompareTableCellValue
              attribute={props.original.attribute}
              value={props.original[el.gazName + el.entity.id]}
              gazName={el.gazName}
            />
          ),
          className: ColumnsClasses.valueContainer,
        },
      ];
    });
  return compareTableColumns;
};
