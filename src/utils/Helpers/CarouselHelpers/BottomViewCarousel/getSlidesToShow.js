import { getSlidesForFiltered } from './getSlidesForFiltered';

export const getSlidesToShow = data => {
  const filtered = data.filter(d => d.actualState !== 'noData');
  const isNoData = data.some(d => d.actualState === 'noData');
  if (filtered.length === 0) {
    return 1;
  } else {
    return getSlidesForFiltered(isNoData, filtered);
  }
};
