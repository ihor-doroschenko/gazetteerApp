import { Divider } from 'antd';
import React from 'react';

const DividerContainer = ({ header }) => {
  return (
    <Divider orientation='left'>
      <p className='smallHeaders'>{header}</p>
    </Divider>
  );
};

export default DividerContainer;
