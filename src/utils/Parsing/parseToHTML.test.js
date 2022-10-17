import React from 'react';
import { parseToHTML } from './parseToHTML';

it('if string gets parsed to HTML', () => {
  const inputValue = '\n gmtOffset: 1 \n timeZoneId: Europe/Warsaw \n dstOffset: 2\n';
  const expectedValue = parseToHTML(inputValue);
  expect(expectedValue.toString()).toStrictEqual(
    [
      <strong>gmtOffset: </strong>,
      '1 \n',
      <strong> timeZoneId: </strong>,
      'Europe/Warsaw \n',
      <strong> dstOffset: </strong>,
      '2\n',
    ].toString()
  );
});
