import React from 'react';
import { getTooltipTextes } from 'utils/Helpers/Tooltip/getTooltipTextes';

const GOVInfoText = () => {
  return (
    <div>
      <p>{getTooltipTextes('gov_partofgraph', 'en')}</p>
    </div>
  );
};

export default GOVInfoText;
