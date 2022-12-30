import { Radio } from 'antd';
import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';

// Wrapper component to contain checkbox from antdesign with respective tooltip

const RadioButton = ({ el }) => {
  const { text, value } = el;
  const key = getKey(text, 'radioButton');
  return (
    <Radio key={key} value={value}>
      {text}
    </Radio>
  );
};
export default RadioButton;
