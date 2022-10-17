import React from 'react';

const BoundingBoxLabel = ({ shouldDraw, shouldRemove }) => {
  return (
    <>
      &nbsp;&nbsp;&nbsp;
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
