import React from 'react';
import { getTooltipTextes } from 'utils/Helpers/Tooltip/getTooltipTextes';

// Component to get info text for the GOV part-of view, being shown under the part-of graph

const GOVInfoText = () => {
  return (
    <div>
      <p>{getTooltipTextes('gov_partofgraph', 'en')}</p>
    </div>
  );
};

export default GOVInfoText;
