export const getStandardOptions = () => {
  return [
    { value: true, text: 'Enabled' },
    { value: false, text: 'Disabled' },
  ];
};

export const getSearchTypeOptions = () => {
  return [
    { value: 'word', text: 'Match word in name' },
    { value: 'full', text: 'Match whole name' },
    { value: 'org', text: 'Original search' },
  ];
};
