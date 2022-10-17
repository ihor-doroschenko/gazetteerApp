import DetailAttribute from 'modules/Content/MainContent/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailAttribute/DetailAttribute';
import DetailValueContainer from 'modules/Content/MainContent/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailValue/DetailValueContainer';
import React from 'react';
import ColumnsClasses from './Columns.module.css';

export const getDetailColumns = ({ details }) => {
  return [
    {
      Header: 'attribute',
      accessor: 'attribute',
      Cell: props => {
        return <DetailAttribute attribute={props.original.attribute} />;
      },
    },
    {
      Header: 'value',
      accessor: 'value',
      Cell: props => {
        return (
          <DetailValueContainer
            value={props.original.value}
            attribute={props.original.attribute}
            details={details}
          />
        );
      },
      className: ColumnsClasses.whiteSpace,
    },
  ];
};
