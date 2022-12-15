import MatchingsTools from 'components/MatchingsTools/MatchingsTools';
import React from 'react';
import MatchingsTableEntityHeaderClasses from './MatchingsTableEntityHeader.module.css';

const MatchingsTableEntityHeader = ({ el, gazName }) => {
  return (
    <div className={MatchingsTableEntityHeaderClasses.entityHeader}>
      <span>{el.id}</span>
      <span>{el.name}</span>
      <div onClick={e => e.stopPropagation()}>
        <MatchingsTools gazName={gazName} id={el.id} />
      </div>
    </div>
  );
};
export default MatchingsTableEntityHeader;
