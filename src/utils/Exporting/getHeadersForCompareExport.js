import { getAbstractMetaAttributes } from 'constants/getAbstractMetaAttributes';

// Get headers to export data from the compare table

export const getHeadersForCompareExport = () => {
  return getAbstractMetaAttributes().map(el => ({ label: el, key: el }));
};
