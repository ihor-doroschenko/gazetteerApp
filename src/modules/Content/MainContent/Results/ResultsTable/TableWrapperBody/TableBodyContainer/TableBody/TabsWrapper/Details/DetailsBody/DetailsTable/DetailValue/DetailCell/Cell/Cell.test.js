import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Cell from './Cell';

describe('Cell', () => {
  test('text should be rendered correctly', () => {
    const { getByText } = render(<Cell text='Geographic text' />);
    expect(getByText('Geographic text')).toBeInTheDocument();
  });
  test('values should be rendered correctly', () => {
    const { getByText } = render(<Cell values='<strong> name: </strong> Gdansk' />);
    expect(getByText('<strong> name: </strong> Gdansk')).toBeInTheDocument();
  });
  /*   test('snapshot', () => {
    const { asFragment } = render(
      <Cell text='Geographic text' values='<strong> name: </strong> Gdansk' />
    );
    expect(
      asFragment(<Cell text='Geographic text' values='<strong> name: </strong> Gdansk' />)
    ).toMatchSnapshot();
  }); */
});
