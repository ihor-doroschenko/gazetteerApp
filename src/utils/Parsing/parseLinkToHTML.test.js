import { parseLinkToHTML } from './parseLinkToHTML';

it('if string contains link it gets parsed to html link tag', () => {
  const inputValue = 'Find me at http://www.example.com and also at https://stackoverflow.com';
  const expectedValue = parseLinkToHTML(inputValue);
  expect(expectedValue).toBe(
    `Find me at <span><a href=http://www.example.com target="_blank" rel="noopener noreferrer">http://www.example.com</a></span> and also at <span><a href=https://stackoverflow.com target="_blank" rel="noopener noreferrer">https://stackoverflow.com</a></span>`
  );
});
