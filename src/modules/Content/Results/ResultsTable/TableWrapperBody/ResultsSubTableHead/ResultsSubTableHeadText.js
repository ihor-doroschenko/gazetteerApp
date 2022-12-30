import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { useGazetteerResultsHeadTitle } from 'Hooks/Subtable/useGazetteerResultsHeadTitle';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsMatched } from 'selectors/simple-selectors/matching-selectors';
import { getIsMatching } from 'selectors/simple-selectors/nav-selectors';
import ResultsSubTableHeadClasses from './ResultsSubTableHead.module.css';

// Component to contain the text of the head of the subtable containing actual gazetteer data

const ResultsSubTableHeadText = ({ original }) => {
  const { mainText, resLength, matchLength, externEntities } =
    useGazetteerResultsHeadTitle(original);
  const onlyMatchedResults = useSelector(getIsMatched);
  const isMatching = useSelector(getIsMatching);
  return (
    <>
      {mainText && (
        <div className={ResultsSubTableHeadClasses.wrapper}>
          {mainText} &nbsp;
          {resLength && (
            <span style={{ color: onlyMatchedResults && 'rgba(0,0,0,0.3)' }}>{resLength}</span>
          )}
          {isMatching && (
            <span style={{ color: !onlyMatchedResults && 'rgba(0,0,0,0.3)' }}>{matchLength}</span>
          )}
          {externEntities && (
            <TooltipContainer
              placement='left'
              text='tt_matched_entities'
              customElement={
                <span style={{ color: onlyMatchedResults && 'rgba(0,0,0,0.3)' }}>
                  {externEntities}
                </span>
              }
            />
          )}
        </div>
      )}
    </>
  );
};
export default ResultsSubTableHeadText;
