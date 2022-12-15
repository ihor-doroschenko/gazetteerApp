import exportFromJSON from 'export-from-json';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import ExportClasses from './Export.module.css';

// Component to contain export component to export data in JSON format

const ExportJSON = ({ data, filename }) => {
  const onclick = () => {
    exportFromJSON({ data, filename, exportType: exportFromJSON.types.json });
  };
  return (
    <div onClick={onclick}>
      <p className={ExportClasses.title}>Export as JSON</p>
    </div>
  );
};

export default withReactMemo(ExportJSON);
