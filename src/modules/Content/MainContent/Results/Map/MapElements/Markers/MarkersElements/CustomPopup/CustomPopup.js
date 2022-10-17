import React from 'react';
import { useSelector } from 'react-redux';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';

const CustomPopup = ({ gazName, name, id }) => {
  const gazetteers = useSelector(getGazetteers);
  const gazetteerFullName = gazetteers.find(g => g.gazName === gazName).text;
  return (
    <div>
      <b>Gazetteer:</b> {gazetteerFullName} <br />
      <b>Name:</b> {name} <br />
      <b>ID:</b> {id} <br />
    </div>
  );
};

export default CustomPopup;
