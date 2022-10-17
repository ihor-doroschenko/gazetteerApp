import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import DetailAttribute from './DetailAttribute';

describe('DetailAttribute', () => {
  test('attribute should be rendered correctly', () => {
    const { getByText } = render(<DetailAttribute attribute='geographic name' />);
    expect(getByText('geographic name')).toBeInTheDocument();
  });
  test('snapshot', () => {
    const { asFragment } = render(<DetailAttribute attribute='geographic name' />);
    expect(asFragment(<DetailAttribute attribute='geographic name' />)).toMatchSnapshot();
  });
});
