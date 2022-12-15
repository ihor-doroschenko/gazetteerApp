import { useAdditionalTableResultData } from 'Hooks/RightResults/useAdditionalTableResultData';
import React from 'react';
import TableSwitcher from '../../../../components/TableSwitcher/TableSwitcher';
import AdditionalTables from './AdditionalTables';

// Wrapper component to contain component and respective switcher for additional results tables (compare and/or matchings)

const AdditionalTablesContainer = props => {
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

export default AdditionalTablesContainer;
