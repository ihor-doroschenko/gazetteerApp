import parse from 'html-react-parser';
import { parseLinkToHTML } from 'utils/Parsing/parseLinkToHTML';
import { makeValueHeadersItalic } from 'utils/TextHandlers/makeValueHeadersItalic';
import { removeFirstEmptyLine } from 'utils/TextHandlers/removeFirstEmptyLine';

export const parseToHTML = value => {
  const splited = value.split(' ').map(el => {
    return parseLinkToHTML(el);
  });
  removeFirstEmptyLine(splited);
  return parse(makeValueHeadersItalic(splited));
};
