import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { CSVLink } from 'react-csv';
import removeAccents from 'remove-accents';
import { convertToExport } from 'utils/Exporting/convertToExport';
import ExportClasses from './Export.module.css';

const ExportCSV = ({ data, headers, filename }) => {
  return (
    <CSVLink
      data={convertToExport(data)}
      headers={headers}
      separator={';'}
      filename={`${removeAccents(filename)}.csv`}>
      <p className={ExportClasses.title}>Export as CSV</p>
    </CSVLink>
  );
};

export default withReactMemo(ExportCSV);
