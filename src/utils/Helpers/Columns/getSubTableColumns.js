import ExportContainer from 'components/Export/ExportContainer';
import FilterName from 'components/Filter/FilterName/FilterName';
import FilterType from 'components/Filter/FilterType/FilterType';
import MarkerContainer from 'components/MarkerContainer/MarkerContainer';
import CompareTool from 'modules/Content/Results/AdditionalResults/Compare/CompareTool';
import React from 'react';
import { getTypeValuesWrapper } from 'utils/Filtering/TypeFilter/getTypeValuesWrapper';
import { getHeadersForSubTableExport } from '../../Exporting/getHeadersForSubTableExport';
import { sortObjectByNameProperty } from '../../Sorting/sortObjectByNameProperty';
import ColumnsClasses from './Columns.module.css';

// Get columns for subtables

export const getSubTableColumns = (entities, gazName) => {
  return [
    // Column without header to contain markers with intern ids
    {
      Header: ' ',
      Cell: props => (
        <MarkerContainer
          internId={props.original.internId}
          gazName={gazName}
          position={props.original.position}
        />
      ),
      filterable: false,
      sortable: false,
      width: 50,
      className: ColumnsClasses.cellsWrapper,
      style: { justifyContent: 'center', height: '45px' },
    },
    // Column with header "id" to contain original gazetteer ids
    {
      Header: 'ID',
      accessor: 'id',
      Cell: props => {
        let id = props.original.id ? props.original.id : '';
        return <div className={ColumnsClasses.namesEllipsis}>{id}</div>;
      },
      filterable: false,
      sortable: true,
      width: 80,
      className: ColumnsClasses.cellsWrapper,
      style: { justifyContent: 'center', height: '45px' },
    },
    // Column with header "name" to contain names as wll as filter to filter entities by name
    {
      Header: 'Record name',
      accessor: 'name',
      Cell: props => {
        let name = props.original.name ? props.original.name : '';
        return <div className={ColumnsClasses.namesEllipsis}>{name}</div>;
      },
      filterable: true,
      sortable: true,
      Filter: ({ filter }) => {
        return <FilterName filter={filter} gazName={gazName} />;
      },
      className: ColumnsClasses.cellsWrapper,
      sortMethod: (a, b) => sortObjectByNameProperty(a, b),
    },
    // Column with header "type" to contain types as wll as filter to filter entities by type
    {
      Header: 'Type',
      accessor: 'type',
      Cell: props => {
        const type = getTypeValuesWrapper(gazName, props.original.type);
        return <div className={ColumnsClasses.namesEllipsis}>{type}</div>;
      },
      sortable: false,
      className: ColumnsClasses.cellsWrapper,
      filterable: true,
      Filter: () => (
        <div className={ColumnsClasses.exportWrapper}>
          <FilterType gazName={gazName} />
        </div>
      ),
    },
    // Column without header to contain buttons to add entities to compare table as well as button to export entities
    {
      Header: '',
      accessor: 'addToDetails',
      Cell: props => {
        return (
          <>
            {!props.original.hasOwnProperty('error') && (
              <div onClick={e => e.stopPropagation()}>
                <CompareTool id={props.original.id} gazName={gazName} />
              </div>
            )}
          </>
        );
      },
      filterable: true,
      sortable: false,
      width: 48,
      className: ColumnsClasses.cellsWrapper,
      style: { justifyContent: 'center', height: '45px' },
      Filter: () => (
        <div className={ColumnsClasses.exportWrapper}>
          <ExportContainer
            entities={entities}
            jsonEntries={entities}
            headers={getHeadersForSubTableExport()}
            filename={`entities-from-${gazName}-exported`}
            gazName={gazName}
          />
        </div>
      ),
    },
  ];
};
