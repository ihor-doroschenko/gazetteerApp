import { useTabs } from 'Hooks/Tabs/useTabs';
import React, { useState } from 'react';
import Measure from 'react-measure';
import 'react-tabs/style/react-tabs.css';

const TableBody = props => {
  const { details, ...other } = props;
  const [elementWidth, setElementWidth] = useState(500);
  const values = useTabs(details, elementWidth);
  return (
    <Measure bounds onResize={contentRect => setElementWidth(contentRect.bounds.width)}>
      {({ measureRef }) => (
        <div ref={measureRef}>{React.cloneElement(props.children, { ...values, ...other })}</div>
      )}
    </Measure>
  );
};

export default TableBody;
