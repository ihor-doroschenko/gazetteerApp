import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'antd';
import classNames from 'classnames';
import MatchingArrow from 'components/MatchingArrow/MatchingArrow';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredMatchingsEntities } from 'selectors/simple-selectors/matching-selectors';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';
import { sortArrayByAnotherArray } from 'utils/Sorting/sortArrayByAnotherArray';
import Matchings from './Matchings/Matchings';
import MatchingsTableEntitiesClasses from './MatchingsTableEntities.module.css';

const MatchingsTableEntities = props => {
  const { Panel } = Collapse;
  const gazetteers = useSelector(getGazetteers);
  const gazNames = gazetteers.map(gaz => gaz.gazName);
  const filteredMatchings = useSelector(getFilteredMatchingsEntities);
  const tables = sortArrayByAnotherArray(Object.keys(filteredMatchings), gazNames).map(key => {
    const fullGazName = gazetteers.find(el => el.gazName === key).text;
    return (
      <>
        <div className={MatchingsTableEntitiesClasses.gazNameHead}>{fullGazName}</div>
        {filteredMatchings[key].length !== 0 &&
          filteredMatchings[key].map((el, index) => {
            return (
              <Panel
                header={
                  <div className={MatchingsTableEntitiesClasses.entityHeader}>
                    <span>{el.id}</span>
                    <span>{el.name}</span>
                    <div onClick={e => e.stopPropagation()}>
                      <MatchingArrow gazName={key} id={el.id} />
                    </div>
                  </div>
                }
                key={`${index}_${el.name}_${fullGazName}`}
                className={classNames(MatchingsTableEntitiesClasses.panel, {
                  [MatchingsTableEntitiesClasses.even]: index % 2 !== 0,
                })}>
                <Matchings entities={el.matchings} />
              </Panel>
            );
          })}
        {filteredMatchings[key].length === 0 && (
          <div className={MatchingsTableEntitiesClasses.noData}> No Data </div>
        )}
      </>
    );
  });
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
        {tables}
      </Collapse>
    </div>
  );
};

export default withReactMemo(MatchingsTableEntities);
