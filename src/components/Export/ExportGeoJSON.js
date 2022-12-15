import exportFromJSON from 'export-from-json';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { generateGeoJSONExport } from 'utils/Exporting/generateGeoJSONExport';
import ExportClasses from './Export.module.css';

// Component to contain export component to export data in CSV format

const ExportGeoJSON = ({ data, filename }) => {
  const onclick = () => {
    exportFromJSON({
      data: generateGeoJSONExport(data),
      fileName: `${filename}-geo`,
      exportType: exportFromJSON.types.json,
    });
  };
  return (
    <div onClick={onclick}>
      <p className={ExportClasses.title}>Export as GeoJSON</p>
    </div>
  );
};

export default withReactMemo(ExportGeoJSON);
