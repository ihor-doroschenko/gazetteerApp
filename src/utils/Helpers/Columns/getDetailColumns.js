import DetailAttribute from 'modules/Content/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailAttribute/DetailAttribute';
import DetailValueContainer from 'modules/Content/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailValue/DetailValueContainer';
import React from 'react';
import ColumnsClasses from './Columns.module.css';

// Get columns for detail view

export const getDetailColumns = ({ details }) => {
  return [
    // Column with header "attribute" to contain attribute name
    {
      Header: 'attribute',
      accessor: 'attribute',
      Cell: props => <DetailAttribute attribute={props.original.attribute} />,
    },
    // Column with header "value" to contain attribute value
    {
      Header: 'value',
      accessor: 'value',
      Cell: props => (
        <DetailValueContainer
          value={props.original.value}
          attribute={props.original.attribute}
          details={details}
        />
      ),
      className: ColumnsClasses.valueContainer,
    },
  ];
};
