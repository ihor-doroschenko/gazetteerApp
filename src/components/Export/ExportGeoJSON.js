import exportFromJSON from 'export-from-json';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { prepareGeoJSONExport } from 'utils/Exporting/prepareGeoJSONExport';
import ExportClasses from './Export.module.css';

const ExportGeoJSON = ({ data, filename }) => {
  const onclick = () => {
    exportFromJSON({
      data: prepareGeoJSONExport(data),
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
