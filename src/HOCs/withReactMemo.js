import React from 'react';
import isEqual from 'react-fast-compare';

// HOC to wrap components with React.memo to prevent unnecessary re-renderings

export const withReactMemo = Component => {
  const WithReactMemoComponent = props => {
    return <Component {...props} />;
  };
  return React.memo(WithReactMemoComponent, isEqual);
};
