import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import InfoClasses from '../Header.module.css';

// Wrapper component to contain help and legal notice / privace policy information

const Info = () => {
  return (
    <div className={InfoClasses.infoHelp}>
      <a href='/meta.html'>
        <TooltipContainer
          placement='left'
          customElement={<p>Info / Help</p>}
          text='tt_go_to_InfoHelp'
          delay={true}
        />
      </a>
      <a href='/legal.html'>
        <TooltipContainer
          placement='left'
          customElement={<p>Legal Notice / Privacy Policy</p>}
          text='tt_go_to_Impressum'
          delay={true}
        />
      </a>
    </div>
  );
};

export default Info;
