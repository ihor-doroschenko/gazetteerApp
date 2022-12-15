import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { CSVLink } from 'react-csv';
import removeAccents from 'remove-accents';
import { prepareToExport } from 'utils/Exporting/prepareToExport';
import ExportClasses from './Export.module.css';

// Component to contain export component to export data in CSV format

const ExportCSV = ({ data, headers, filename }) => {
  return (
    <CSVLink
      data={prepareToExport(data)}
      headers={headers}
      separator={';'}
      filename={`${removeAccents(filename)}.csv`}>
      <p className={ExportClasses.title}>Export as CSV</p>
    </CSVLink>
  );
};

export default withReactMemo(ExportCSV);
