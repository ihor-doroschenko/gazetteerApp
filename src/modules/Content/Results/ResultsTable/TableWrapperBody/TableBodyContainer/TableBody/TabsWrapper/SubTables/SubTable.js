import classNames from 'classnames';
import { useAutoscroll } from 'Hooks/Autoscroll/useAutoscroll';
import { useSubTableEventHandlers } from 'Hooks/Subtable/useSubTableEventHandlers';
import { useSubTableFilter } from 'Hooks/Subtable/useSubTableFilter';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { getCombinedFilteredEntities } from 'selectors/reselectors/getCombinedFilteredEntities';
import { getSelectedEntities } from 'selectors/reselectors/simple-reselectors';
import {
  getMouseClickedElement,
  getMouseOverElement,
  getMouseOverElementInfinite,
} from 'selectors/simple-selectors/map-interaction-selectors';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { filterEntities } from 'utils/Filtering/filterEntities';
import { getCurrentEntitiesLength } from 'utils/Helpers/TableHelpers/getCurrentEntitiesLength';
import { getMinRows } from 'utils/Helpers/TableHelpers/getMinRows';
import { eventHandlersSubtable } from 'utils/Styling/eventHandlersSubtable';
import { getMousedColorForRow } from 'utils/Styling/getMousedColorForRow';
import { changeOverflow } from 'utils/Styling/SubTable/changeOverflow';
import { handleNoDataTextStyle } from 'utils/Styling/SubTable/handleNoDataTextStyle';
import { markSortableColumns } from 'utils/Styling/SubTable/markSortableColumns';
import { setShadowFromTop } from 'utils/Styling/SubTable/setShadowFromTop';
import SubTableClasses from './SubTable.module.css';

// Wrapper component to contain subtable for gazetteer-specific results (one subtable for one gazetteer). It is based on a table element from react-tables (v6). This wrapper provides such additional functionalities for this table as interaction with the map, filtering, sorting, conditional styling, and autoscrolling

const SubTable = ({ gazName, columns }) => {
  const customRef = useRef();
  const isSideSwitched = useSelector(getIsSideSwitched);
  const mouseOverElement = useSelector(getMouseOverElement);
  const mouseOverElementInfinite = useSelector(getMouseOverElementInfinite);
  const mouseClickedElement = useSelector(getMouseClickedElement);
  const entities = useSelector(state => getSelectedEntities(state, gazName));
  const filteredEntities = useSelector(state => getCombinedFilteredEntities(state, gazName));
  const filterValues = useSubTableFilter(gazName);
  const subTableEventHandlers = useSubTableEventHandlers();
  const length = getCurrentEntitiesLength(filteredEntities, entities, filterValues);
  useAutoscroll(customRef, mouseClickedElement);
  return (
    <div
      className={classNames(SubTableClasses.subTableWrapper, 'shadowInResultsTable', {
        [SubTableClasses.subTableBottomWrapper]: isSideSwitched,
        [SubTableClasses.subTableSideWrapper]: !isSideSwitched,
      })}>
      <ReactTable
        ref={customRef}
        columns={columns}
        data={entities}
        pageSize={length}
        minRows={getMinRows(isSideSwitched, length)}
        filtered={filterValues}
        defaultSorted={[{ id: 'name', asc: true }]}
        showPagination={false}
        filterable
        className={classNames('-striped -highlight', SubTableClasses.subTable)}
        noDataText='No entities found'
        defaultFilterMethod={(filter, row) => filterEntities(filter, row, gazName)}
        getTbodyProps={el =>
          changeOverflow(isSideSwitched, entities, filteredEntities, filterValues)
        }
        getTheadFilterProps={el => setShadowFromTop()}
        getTrGroupProps={(row, rowInfo) =>
          getMousedColorForRow({ rowInfo, gazName, mouseOverElementInfinite, mouseOverElement })
        }
        getTrProps={(state, rowInfo, column, instance) =>
          eventHandlersSubtable({
            rowInfo,
            gazName,
            mouseOverElementInfinite,
            subTableEventHandlers,
          })
        }
        getTheadThProps={(table, row, col) => markSortableColumns(col.sortable)}
        getNoDataProps={table => handleNoDataTextStyle()}
      />
    </div>
  );
};

export default SubTable;
