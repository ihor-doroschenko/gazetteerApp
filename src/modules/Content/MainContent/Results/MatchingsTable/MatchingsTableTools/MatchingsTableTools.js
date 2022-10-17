import classNames from 'classnames';
import { useMatchingsTableFilterValuesExtraction } from 'Hooks/Matchings/useMatchingsTableFilterValuesExtraction';
import React from 'react';
import { setCurrentGazetteer, setCurrentSourceGazetteer } from 'redux/matching-reducer';
import MatchingsTableFilter from './MatchingsTableFilter';
import MatchingsTableToolClasses from './MatchingsTableTool.module.css';

const MatchingsTableTools = props => {
  const { currentSourceGazetteer, currentGazetteer, currentSourceGazetteers, currentGazetteers } =
    useMatchingsTableFilterValuesExtraction();
  return (
    <div className={classNames('borderBottom', MatchingsTableToolClasses.toolWrapper)}>
      <div className={MatchingsTableToolClasses.filtersWrapper}>
        <div>
          <p>Source gazetteer: </p>
          <MatchingsTableFilter
            value={currentSourceGazetteer}
            values={currentSourceGazetteers}
            onChangeCallback={setCurrentSourceGazetteer}
          />
        </div>
        <div>
          <p>Matchings gazetteer: </p>
          <MatchingsTableFilter
            value={currentGazetteer}
            values={currentGazetteers}
            onChangeCallback={setCurrentGazetteer}
          />
        </div>
      </div>
    </div>
  );
};

export default MatchingsTableTools;
