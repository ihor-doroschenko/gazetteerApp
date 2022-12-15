import React, { useEffect, useRef, useState } from 'react';
import Zoom from 'react-img-zoom';
import { useSelector } from 'react-redux';
import { getResultsWidth } from 'selectors/simple-selectors/table-state-selectors';

const PartOfImageEnlarged = ({ info, name }) => {
  const resultsBlockRightWidth = useSelector(getResultsWidth);

  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current && ref.current.clientHeight !== 0) {
      setHeight(ref.current.clientHeight);
    }
  });

  return (
    <div ref={ref}>
      <Zoom
        key={`${name}and${resultsBlockRightWidth}`}
        img={info}
        zoomScale={5}
        width={resultsBlockRightWidth}
        height={239}
      />
    </div>
  );
};

export default PartOfImageEnlarged;
