import CheckboxWrapper from 'components/CheckboxWrapper/CheckboxWrapper';
import { gazetteerInfo } from 'constants/getGazetteerInfo';
import parse from 'html-react-parser';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setGazetteerValue } from 'redux/search-reducer';

// Component to contain checkbox for each gazetteer to select or deselect for current search

const DatabaseElement = ({ gazetteer }) => {
  const dispatch = useDispatch();
  const { id, gazName, value, text } = gazetteerInfo[gazetteer];
  return (
    <CheckboxWrapper
      id={id}
      optionName={gazName}
      value={value}
      callback={e => dispatch(setGazetteerValue(gazName, e.target.checked))}
      tooltipText={`tt_${gazName}`}
      customElement={<p>{parse(text)}</p>}
    />
  );
};
export default DatabaseElement;
