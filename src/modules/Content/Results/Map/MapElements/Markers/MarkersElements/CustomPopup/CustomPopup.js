import { gazetteerInfo } from 'constants/getGazetteerInfo';
import React from 'react';

// Component to contain text which appears on the mouse click on the marker (popup element)

const CustomPopup = ({ gazName, name, id }) => {
  const gazetteerFullName = gazetteerInfo[gazName] ? gazetteerInfo[gazName].text : '';
  return (
    <div>
      <b>Gazetteer:</b> {gazetteerFullName} <br />
      <b>Name:</b> {name} <br />
      <b>ID:</b> {id} <br />
    </div>
  );
};

export default CustomPopup;
