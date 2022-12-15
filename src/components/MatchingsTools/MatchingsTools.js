import { gazetteerInfo } from 'constants/getGazetteerInfo';
import CompareTool from 'modules/Content/Results/AdditionalResults/Compare/CompareTool';
import React from 'react';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';
import MatchingsArrow from './MatchingsArrow';

// Component to contain tools to work with matchings

//TODO: add global className flexCenter
const MatchingsTools = ({ gazName, id }) => {
  const gazetteerIsUsed = IsGazetteerInUsedGazetteers(Object.keys(gazetteerInfo), gazName);
  return (
    <>
      {gazetteerIsUsed && (
        <div className='flexCenter'>
          <CompareTool gazName={gazName} id={id} />
          <MatchingsArrow gazName={gazName} id={id} />
        </div>
      )}
    </>
  );
};

export default MatchingsTools;
