import { useAdditionalTableResultData } from 'Hooks/RightResults/useAdditionalTableResultData';
import React from 'react';
import TableSwitcher from '../ResultsTable/TableSwitcher/TableSwitcher';
import AdditionalTables from './AdditionalTables';

const AdditionalTablesWrapper = props => {
  const { isToolEnabled, isToolHidden, switchValue, topValue } = useAdditionalTableResultData(
    props.value
  );

  return (
    <>
      {isToolEnabled && (
        <>
          <AdditionalTables {...props} />
          {isToolHidden && (
            <div>
              <TableSwitcher
                isToolHidden={isToolHidden}
                topValue={topValue}
                switchValue={switchValue}
                name={props.value ? 'Compare' : 'Matchings'}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AdditionalTablesWrapper;
