import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import DetailCellWrapper from '../DetailCell/DetailCellWrapper';
import PartOf from './PartOf';
import PartOfClasses from './PartOf.module.css';

const PartOfWrapper = ({ id, image, value }) => {
  return (
    <div className={PartOfClasses.govBildSwitch}>
      <CustomBreadcrumb id={id} image={image} />
      {image && image.isOpened ? (
        <PartOf image={image} id={id} />
      ) : (
        <DetailCellWrapper values={value || ''} limit={5} />
      )}
    </div>
  );
};

export default withReactMemo(PartOfWrapper);
