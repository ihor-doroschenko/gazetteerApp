import MatchingArrow from 'components/MatchingArrow/MatchingArrow';
import React from 'react';
import DetailsClasses from '../../../Details.module.css';
import MatchingInDetailProperty from './MatchingInDetailProperty';

const MatchingInDetail = ({ matchings }) => {
  return (
    <>
      {matchings.map(m => {
        return (
          <div className={DetailsClasses.matchings} key={`wrapper_${m.db}_${m.id}`}>
            <div>
              {Object.keys(m).map(
                property =>
                  property !== 'link' && (
                    <MatchingInDetailProperty
                      key={`element_${m.db}_${m.id}_${property}`}
                      item={m}
                      property={property}
                    />
                  )
              )}
              <div>
                {m.link && (
                  <span>
                    <b>link: </b>
                    <a href={m.link} target='_blank' rel='noopener noreferrer'>
                      {m.link}
                    </a>
                  </span>
                )}
              </div>
            </div>
            <div>
              <MatchingArrow gazName={m.db} id={m.id} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchingInDetail;
