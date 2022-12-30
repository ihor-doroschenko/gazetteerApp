import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Menu, Space } from 'antd';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import { useFilterValuesForExport } from 'Hooks/Export/useFilterValuesForExport';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCombinedFilteredEntities } from 'selectors/reselectors/getCombinedFilteredEntities';
import ExportClasses from './Export.module.css';
import ExportCSV from './ExportCSV';
import ExportGeoJSON from './ExportGeoJSON';
import ExportJSON from './ExportJSON';

// Component wrapper to contain export components (in CSV, JSON, and geoJSON formats)

const ExportContainer = ({ gazName = false, entities, jsonEntries, headers, filename }) => {
  const combinedFilteredEntities = useSelector(state =>
    getCombinedFilteredEntities(state, gazName)
  );
  const areFilterValues = useFilterValuesForExport(gazName);
  const exportData = areFilterValues ? combinedFilteredEntities : entities;
  const menu = (
    <Menu>
      <Menu.Item>
        <ExportCSV data={exportData} headers={headers} filename={filename} />
      </Menu.Item>
      <Menu.Item>
        <ExportJSON data={exportData} filename={filename} />
      </Menu.Item>
      <Menu.Item>
        <ExportGeoJSON data={jsonEntries} filename={filename} />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div onClick={e => e.preventDefault()}>
        <Space>
          <TooltipContainer
            placement='left'
            icon={faFileDownload}
            text='tt_export'
            styleProp={ExportClasses.iconExport}
          />
        </Space>
      </div>
    </Dropdown>
  );
};

export default withReactMemo(ExportContainer);
