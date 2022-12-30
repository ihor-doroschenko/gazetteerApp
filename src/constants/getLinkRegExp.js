// Get regexp to match a valid link in a string

export const getLinkRegExp = () => {
  return /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
};
