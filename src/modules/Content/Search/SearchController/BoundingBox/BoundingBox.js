import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { useBoundingBox } from 'Hooks/Search/useBoundingBox';
import React from 'react';
import BoundingBoxClasses from './BoundingBox.module.css';
import BoundingBoxIcon from './BoundingBoxIcon';
import BoundingBoxLabel from './BoundingBoxLabel';

// Wrapper component to contain logic to manage bounding box tool states (the icon of the tool will change according to the state) and to assign respective tooltip and label to it

const BoundingBox = props => {
  const { shouldDraw, shouldRemove, enableDrawing, disableDrawing } = useBoundingBox();
  return (
    <div
      className={BoundingBoxClasses.boundingBox}
      onClick={!shouldRemove ? enableDrawing : disableDrawing}>
      <TooltipContainer
        placement='top'
        customElement={<BoundingBoxIcon shouldDraw={shouldDraw} shouldRemove={shouldRemove} />}
        text={shouldRemove ? 'tt_bounding_box_remove' : 'tt_bounding_box_open'}
        delay={true}
      />
      <BoundingBoxLabel shouldDraw={shouldDraw} shouldRemove={shouldRemove} />
    </div>
  );
};

export default BoundingBox;
