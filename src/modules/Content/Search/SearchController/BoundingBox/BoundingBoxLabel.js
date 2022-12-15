import React from 'react';

// Component to contain labels for the bounding box icon tool. It works conditionally depending on current state of the tool (remove, draw or default mode)

const BoundingBoxLabel = ({ shouldDraw, shouldRemove }) => {
  return (
    <>
      <p>
        {shouldRemove ? (
          <>Delete search region</>
        ) : shouldDraw ? (
          <>Drawing process started</>
        ) : (
          <>Draw search region</>
        )}
      </p>
    </>
  );
};

export default BoundingBoxLabel;
