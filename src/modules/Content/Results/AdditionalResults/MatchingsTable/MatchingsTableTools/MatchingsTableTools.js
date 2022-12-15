import classNames from 'classnames';
import { useMatchingsTableFilterValuesExtraction } from 'Hooks/Matchings/useMatchingsTableFilterValuesExtraction';
import React from 'react';
import { setCurrentGazetteer, setCurrentSourceGazetteer } from 'redux/matching-reducer';
import MatchingsTableFilter from './MatchingsTableFilter';
import MatchingsTableToolClasses from './MatchingsTableTool.module.css';

// Wrapper component to contain filters for matchings table. There are all in all two filters so far - filter by source gazetteer and filter by matching gazetteer

const MatchingsTableTools = props => {
  const { currentSourceGazetteer, currentGazetteer, currentSourceGazetteers, currentGazetteers } =
    useMatchingsTableFilterValuesExtraction();
  const matchingFilters = [
    {
      name: 'Source gazetteer: ',
      value: currentSourceGazetteer,
      values: currentSourceGazetteers,
      callback: setCurrentSourceGazetteer,
    },
    {
      name: 'Matchings gazetteer: ',
      value: currentGazetteer,
      values: currentGazetteers,
      callback: setCurrentGazetteer,
    },
  ];
  return (
    <div className={classNames('borderBottom', MatchingsTableToolClasses.toolWrapper)}>
      <div className={MatchingsTableToolClasses.filtersWrapper}>
        {matchingFilters.map(el => {
          return (
            <div>
              <p>{el.name}</p>
              <MatchingsTableFilter
                value={el.value}
                values={el.values}
                onChangeCallback={el.callback}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchingsTableTools;
