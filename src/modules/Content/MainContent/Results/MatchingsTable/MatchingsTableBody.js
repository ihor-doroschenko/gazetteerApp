import { withReactMemo } from 'HOCs/withReactMemo';
import { useMatchingsFilterData } from 'Hooks/Matchings/useMatchingsFilterData';
import React from 'react';
import MatchingsTableClasses from './MatchingsTable.module.css';
import MatchingsTableEntities from './MatchingsTableEntities/MatchingsTableEntities';
import MatchingsTableTools from './MatchingsTableTools/MatchingsTableTools';

const MatchingsTableBody = () => {
  useMatchingsFilterData();
  return (
    <div className={MatchingsTableClasses.tableBody}>
      <MatchingsTableTools />
      <MatchingsTableEntities />
    </div>
  );
};

export default withReactMemo(MatchingsTableBody);
