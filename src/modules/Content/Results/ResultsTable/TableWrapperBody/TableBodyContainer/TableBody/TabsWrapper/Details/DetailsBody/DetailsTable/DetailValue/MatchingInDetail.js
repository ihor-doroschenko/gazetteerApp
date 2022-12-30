import MatchingsTools from 'components/MatchingsTools/MatchingsTools';
import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';
import DetailsClasses from '../../../Details.module.css';
import MatchingLinkInDetails from './MatchingLinkInDetails';
import MatchingPropertyInDetails from './MatchingPropertyInDetails';

// Wrapper component to contain matchings properties and tools for them (compare tool and arrow to get to the original entity if it is available)

const MatchingInDetail = ({ matchings }) => {
  return (
    <>
      {matchings.map(m => {
        const wrapperKey = getKey(m.id, 'wrapperMatchingsInDetail');
        return (
          <div className={DetailsClasses.matchings} key={wrapperKey}>
            <div>
              {Object.keys(m).map(property => {
                const elementKey = getKey(property, 'elementMatchingsInDetail');
                return <MatchingPropertyInDetails key={elementKey} item={m} property={property} />;
              })}
              <MatchingLinkInDetails matching={m} />
            </div>
            <div>
              <MatchingsTools gazName={m.db} id={m.id} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchingInDetail;
