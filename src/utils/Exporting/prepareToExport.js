import { stringifyProperties } from './stringifyProperties';

// Preparing the data to export and run stringifyProperties for each element

export const prepareToExport = dataset => dataset.map(el => stringifyProperties(el));
