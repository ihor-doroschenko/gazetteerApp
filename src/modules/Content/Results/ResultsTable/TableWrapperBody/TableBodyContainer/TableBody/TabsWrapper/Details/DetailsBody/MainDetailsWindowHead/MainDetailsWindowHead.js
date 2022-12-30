import DetailsHeader from 'components/Header/DetailsHeader';
import React from 'react';
import DetailsClasses from '../../Details.module.css';
import DetailsToolSet from './DetailsToolSet/DetailsToolSet';

// Wrapper component to contain header for the details view and the toolset to work with the details data

const MainDetailsWindowHead = props => {
  return (
    <div className={DetailsClasses.mainDetailsWindowHead}>
      <div>
        <DetailsHeader name={props.details.detail.name} id={props.details.detail.id} />
      </div>
      <DetailsToolSet {...props} />
    </div>
  );
};

export default MainDetailsWindowHead;
