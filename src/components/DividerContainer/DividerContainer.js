import { Divider } from 'antd';
import React from 'react';

// Component wrapper for a antdesign-divider between content areas

const DividerContainer = ({ header }) => {
  return (
    <Divider orientation='left'>
      <p className='smallHeaders'>{header}</p>
    </Divider>
  );
};

export default DividerContainer;
