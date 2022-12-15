import { Radio } from 'antd';
import React from 'react';

// Wrapper component to contain checkbox from antdesign with respective tooltip

const RadioButton = ({ el }) => {
  const { text, value } = el;
  return (
    <Radio key={text} value={value}>
      {text}
    </Radio>
  );
};
export default RadioButton;
