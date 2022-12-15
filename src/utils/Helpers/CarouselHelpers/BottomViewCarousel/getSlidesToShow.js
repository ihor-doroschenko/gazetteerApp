import { getSlidesForSubTablesWithData } from './getSlidesForSubTablesWithData';

// Get slides amount to show (for bottom view)

export const getSlidesToShow = data => {
  const filtered = data.filter(d => d.actualState !== 'noData');
  if (filtered.length === 0) {
    return 1;
  }
  return getSlidesForSubTablesWithData(data);
};
