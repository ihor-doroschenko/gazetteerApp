import DetailsHeader from 'components/Header/DetailsHeader';
import React from 'react';
import DetailsClasses from '../../Details.module.css';
import DetailsToolSet from './DetailsToolSet/DetailsToolSet';

const MainDetailsWindowHead = props => {
  return (
    <div className={DetailsClasses.mainDetailsWindowHead}>
      <div>
        <p>
          <DetailsHeader name={props.details.details.name} id={props.details.details.id} />
        </p>
      </div>
      <DetailsToolSet {...props} />
    </div>
  );
};

export default MainDetailsWindowHead;
