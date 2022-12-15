// Get types for the search

export const getSearchTypes = () => {
  return [
    { value: 'word', text: 'Match word in name' },
    { value: 'full', text: 'Match whole name' },
    { value: 'org', text: 'Original search' },
  ];
};
