import { withReactMemo } from 'HOCs/withReactMemo';
import { useGazetteerResultsHeadTitle } from 'Hooks/Subtable/useGazetteerResultsHeadTitle';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsMatched } from 'selectors/simple-selectors/matching-selectors';
import GazetteerResultsHeadClasses from './GazetteerResultsHead.module.css';

const GazetteerResultsHead = ({ original, newRef }) => {
  const { mainText, resLength, matchLength, description } = useGazetteerResultsHeadTitle(original);
  const isMatched = useSelector(getIsMatched);
  return (
    <div className={GazetteerResultsHeadClasses.head} ref={newRef}>
      <span
        className={GazetteerResultsHeadClasses.dot}
        style={{ backgroundColor: original.color }}></span>
      {mainText && mainText}
      {resLength && <span style={{ color: isMatched && 'rgba(0,0,0,0.3)' }}>{resLength}</span>}
      {matchLength && <span style={{ color: !isMatched && 'rgba(0,0,0,0.3)' }}>{matchLength}</span>}
      {description && description}
    </div>
  );
};

export default withReactMemo(GazetteerResultsHead);
