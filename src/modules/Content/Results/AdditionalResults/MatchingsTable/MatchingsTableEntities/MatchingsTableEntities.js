import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'antd';
import classNames from 'classnames';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { gazetteerInfo } from 'constants/getGazetteerInfo';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredMatchingsEntities } from 'selectors/simple-selectors/matching-selectors';
import { getMatchingFullGazName } from 'utils/Helpers/Matchings/getMatchingFullGazName';
import { sortArrayByAnotherArray } from 'utils/Sorting/sortArrayByAnotherArray';
import Matchings from './Matchings/Matchings';
import MatchingsTableEntitiesClasses from './MatchingsTableEntities.module.css';
import MatchingsTableEntityHeader from './MatchingsTableEntityHeader/MatchingsTableEntityHeader';

// Wrapper component to contain entities of the matchings table. It is based on the Collapse/Panel UI-elements of antdesign.
// It should be better to split this component into multiple components, but the UI-elements of antdesign mentioned above does not allow to be used in separate components. Another approach/library should be used here in the future

const MatchingsTableEntities = props => {
  const { Panel } = Collapse;
  const gazNames = Object.keys(gazetteerInfo);
  const filteredMatchings = useSelector(getFilteredMatchingsEntities);
  const sorted = sortArrayByAnotherArray(Object.keys(filteredMatchings), gazNames);
  return (
    <div>
      <Collapse
        expandIcon={({ isActive }) => (
          <div className={MatchingsTableEntitiesClasses.collapseArrowContainer}>
            <TooltipContainer
              placement='left'
              icon={isActive ? faAngleDown : faAngleRight}
              text={isActive ? 'tt_collapse_matching_results' : 'tt_expand_matching_results'}
              delay={true}
            />
          </div>
        )}>
        {sorted.map(key => {
          const fullGazName = getMatchingFullGazName(key);
          const isEmpty = filteredMatchings[key].length === 0;
          return (
            <>
              <div className={MatchingsTableEntitiesClasses.gazNameHead}>{fullGazName}</div>
              {!isEmpty &&
                filteredMatchings[key].map((el, index) => {
                  return (
                    <Panel
                      header={<MatchingsTableEntityHeader el={el} gazName={key} />}
                      key={`${el.id}_${fullGazName}`}
                      className={classNames(MatchingsTableEntitiesClasses.panel, {
                        [MatchingsTableEntitiesClasses.even]: index % 2 !== 0,
                      })}>
                      <Matchings entities={el.matchings} />
                    </Panel>
                  );
                })}
              {isEmpty && <div className={MatchingsTableEntitiesClasses.noData}> No Data </div>}
            </>
          );
        })}
      </Collapse>
    </div>
  );
};

export default withReactMemo(MatchingsTableEntities);
