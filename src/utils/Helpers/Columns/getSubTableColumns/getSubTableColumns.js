import ExportContainer from 'components/Export/ExportContainer';
import FilterName from 'components/Filter/FilterName/FilterName';
import FilterType from 'components/Filter/FilterType/FilterType';
import MarkerContainer from 'components/MarkerContainer/MarkerContainer';
import CompareTool from 'modules/Content/MainContent/Results/Compare/CompareTool';
import React from 'react';
import { getGeneralExportAccessors } from '../../../Exporting/getGeneralExportAccessors';
import { getTypeValues } from '../../../Filtering/TypeFilter/getTypeValues';
import { sortArrayByNameProperty } from '../../../Sorting/sortArrayByNameProperty';
import SubTableColumnsClasses from './SubTableColumns.module.css';

export const getSubTableColumns = (entries, gazName, color) => {
  return [
    {
      Header: ' ',
      Cell: props => {
        return (
          <MarkerContainer
            internId={props.original.internId}
            mouseValue={false}
            color={color}
            position={props.original.position}
            mapMarker={false}
          />
        );
      },
      filterable: false,
      sortable: false,
      width: 50,
      maxWidth: 50,
      minWidth: 50,
      className: SubTableColumnsClasses.cellsWrapper,
      style: { justifyContent: 'center', minHeight: '45px' },
    },
    {
      Header: 'ID',
      accessor: 'id',
      Cell: props => {
        let id = props.original.id ? props.original.id : '';
        return <div className={SubTableColumnsClasses.namesEllipsis}>{id}</div>;
      },
      filterable: false,
      sortable: true,
      width: 80,
      className: SubTableColumnsClasses.cellsWrapper,
      style: { justifyContent: 'center' },
    },
    {
      Header: 'Record name',
      accessor: 'name',
      Cell: props => {
        let name = props.original.name ? props.original.name : '';
        return <div className={SubTableColumnsClasses.namesEllipsis}>{name}</div>;
      },
      filterable: true,
      sortable: true,
      Filter: ({ filter }) => {
        return <FilterName filter={filter} gazName={gazName} />;
      },
      className: SubTableColumnsClasses.cellsWrapper,
      sortMethod: (a, b) => sortArrayByNameProperty(a, b),
    },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: props => {
        const newSet = new Set();
        getTypeValues(newSet, gazName, props.original.type);
        const type = newSet ? Array.from(newSet).join(', ') : '';
        return <div className={SubTableColumnsClasses.namesEllipsis}>{type}</div>;
      },
      sortable: false,
      className: SubTableColumnsClasses.cellsWrapper,
      filterable: true,
      Filter: () => {
        return (
          <div className={SubTableColumnsClasses.exportWrapper}>
            <FilterType gazName={gazName} />
          </div>
        );
      },
    },
    {
      Header: '',
      accessor: 'addToDetails',
      Cell: props => {
        return (
          <div onClick={e => e.stopPropagation()}>
            <CompareTool id={props.original.id} gazName={gazName} />
          </div>
        );
      },
      filterable: true,
      sortable: false,
      width: 48,
      className: SubTableColumnsClasses.cellsWrapper,
      style: { justifyContent: 'center' },
      Filter: () => {
        return (
          <div className={SubTableColumnsClasses.exportWrapper}>
            <ExportContainer
              entries={entries}
              jsonEntries={entries}
              headers={getGeneralExportAccessors()}
              filename={`entries-from-${gazName}-exported`}
              gazName={gazName}
            />
          </div>
        );
      },
    },
  ];
};
