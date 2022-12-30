// Sort object by keys

export const sortObject = o =>
  Object.keys(o)
    .sort()
    // eslint-disable-next-line no-sequences
    .reduce((r, k) => ((r[k] = o[k]), r), {});
