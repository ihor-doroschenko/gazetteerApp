import CompareTableCellValue from 'modules/Content/MainContent/Results/Compare/CompareTable/CompareTableElements/CompareTableCellValue/CompareTableCellValue';
import CompareTableGazHeader from 'modules/Content/MainContent/Results/Compare/CompareTable/CompareTableElements/CompareTableGazHeader/CompareTableGazHeader';
import DetailAttribute from 'modules/Content/MainContent/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailAttribute/DetailAttribute';
import React from 'react';
import ColumnsClasses from './Columns.module.css';

export const getCompareTableColumns = entitiesToCompare => {
  let compareTableColumns = [
    {
      Header: <b>attribute</b>,
      accessor: 'attribute',
      Cell: props => {
        return <DetailAttribute attribute={props.original.attribute} />;
      },
      className: ColumnsClasses.attributeHeader,
    },
  ];
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
          className: ColumnsClasses.whiteSpace,
          style: { margin: 'auto' },
        },
      ];
    });
  return compareTableColumns;
};
