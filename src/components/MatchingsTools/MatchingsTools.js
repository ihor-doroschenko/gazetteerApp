import { gazetteerInfo } from 'constants/getGazetteerInfo';
import CompareTool from 'modules/Content/Results/AdditionalResults/Compare/CompareTool';
import React from 'react';
import { useSelector } from 'react-redux';
import { getGazetteerStatus } from 'selectors/reselectors/simple-reselectors';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';
import MatchingsArrow from './MatchingsArrow';
import MatchingsToolsClasses from './MatchingsTool.module.css';

// Component to contain tools to work with matchings

const MatchingsTools = ({ gazName, id }) => {
  const gazetteerIsUsed = isGazetteerInUsedGazetteers(Object.keys(gazetteerInfo), gazName);
  const status = useSelector(state => getGazetteerStatus(state, gazName));
  const isStatusNotFetching = status !== 'isFetching';
  return (
    <>
      {gazetteerIsUsed && (
        <div className={MatchingsToolsClasses.tools}>
          <CompareTool gazName={gazName} id={id} />
          {isStatusNotFetching && <MatchingsArrow gazName={gazName} id={id} />}
        </div>
      )}
    </>
  );
};

export default MatchingsTools;
