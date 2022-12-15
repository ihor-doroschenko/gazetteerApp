import { getLinkRegExp } from 'constants/getLinkRegExp';

// If there is a link, parse it to valid html element (hyperlink)

export const parseLinkToHTML = text => {
  const urlRegex = getLinkRegExp();
  return text.replace(urlRegex, url => {
    return `<span><a href=${url} target="_blank" rel="noopener noreferrer">${url}</a></span>`;
  });
};
