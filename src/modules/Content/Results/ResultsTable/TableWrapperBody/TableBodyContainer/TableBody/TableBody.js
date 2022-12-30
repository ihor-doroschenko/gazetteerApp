import { useTabs } from 'Hooks/Tabs/useTabs';
import React, { useState } from 'react';
import Measure from 'react-measure';
import { useSelector } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { filterDetailsByGazName } from 'utils/Helpers/TableHelpers/filterDetailsByGazName';

// Wrapper component to provide custom functionality from react-tabs (to switch between tabs, close tabs, etc.) for the TabsWrapper component, hier as children as well as providing functionalities to control dimensions to be able to adjust amount of tabs depending on actual width

const TableBody = ({ gazName, children }) => {
  const [elementWidth, setElementWidth] = useState(500);
  const detailsList = useSelector(getDetails);
  const filteredDetails = filterDetailsByGazName(detailsList, gazName);
  const tabFunctionalities = useTabs(filteredDetails, elementWidth);
  return (
    <Measure bounds onResize={contentRect => setElementWidth(contentRect.bounds.width)}>
      {({ measureRef }) => (
        <div ref={measureRef}>
          {React.cloneElement(children, { ...tabFunctionalities, gazName })}
        </div>
      )}
    </Measure>
  );
};

export default TableBody;
