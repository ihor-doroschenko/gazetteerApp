import { getLinkRegExp } from 'constants/getLinkRegExp';

export const parseLinkToHTML = text => {
  var urlRegex = getLinkRegExp();
  return text.replace(urlRegex, url => {
    return `<span><a href=${url} target="_blank" rel="noopener noreferrer">${url}</a></span>`;
  });
};
