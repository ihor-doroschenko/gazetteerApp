// Get slides amount for subtables with data (which have actualState not "noData"; for bottom view)

export const getSlidesForSubTablesWithData = data => {
  const filtered = data.filter(d => d.actualState !== 'noData');
  const isNoData = data.some(d => d.actualState === 'noData');
  if (filtered.length < 3) {
    return isNoData ? filtered.length + 1 : filtered.length;
  }
  return 3;
};
