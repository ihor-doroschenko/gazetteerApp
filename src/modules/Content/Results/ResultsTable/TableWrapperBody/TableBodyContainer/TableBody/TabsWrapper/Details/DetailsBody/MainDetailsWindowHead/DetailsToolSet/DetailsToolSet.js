import ExportClasses from 'components/Export/Export.module.css';
import ExportContainer from 'components/Export/ExportContainer';
import ToogleEssentialAttributes from 'components/Toogle/ToogleEssentialAttributes';
import ToogleSkip from 'components/Toogle/ToogleSkip';
import ZoomToEntity from 'components/ZoomToEntity/ZoomToEntity';
import { useDetailsDataToExport } from 'Hooks/Export/useDetailsDataToExport';
import CompareTool from 'modules/Content/Results/AdditionalResults/Compare/CompareTool';
import React from 'react';
import { useDispatch } from 'react-redux';
import { switchDetailMetaProperty } from 'redux/details-reducer';
import { getNameForExport } from 'utils/TextHandlers/getNameForExport';
import DetailsToolSetClasses from './DetailsToolSet.module.css';

// Wrapper component to contain tools to work with the details data inthe details view. It includes toogleSkip (exclude those attributes that do not have values), toogle essential attributes (show only the essential attributes with their values), zoom to entity (zoom to current entity on the map, if it has valid coordinates), compare tool (enable compare table to compare entities), and export container (export current entity as JSON, geoJSON or CSV)

const DetailsToolSet = ({ details, data }) => {
  const dispatch = useDispatch();
  const dataToExport = useDetailsDataToExport(data);
  const { isFilled, detail, isEssential, gazName } = details;
  return (
    <div className={DetailsToolSetClasses.detailsToolSet}>
      <ToogleSkip
        isFilled={isFilled}
        callback={() =>
          detail.id
            ? dispatch(switchDetailMetaProperty(detail.id, 'isFilled'))
            : dispatch(switchDetailMetaProperty())
        }
      />
      <ToogleEssentialAttributes
        isEssential={isEssential}
        callback={() => dispatch(switchDetailMetaProperty(detail.id, 'isEssential'))}
      />
      <ZoomToEntity detail={detail} gazName={gazName} />
      <CompareTool id={detail.id} gazName={gazName} />
      <div>
        <ExportContainer
          entities={[dataToExport.values]}
          jsonEntries={[detail]}
          passedClass={ExportClasses.exportCSVDetails}
          filename={`${gazName}_${detail.id}_${getNameForExport(detail.name)}`}
          headers={dataToExport.attributes}
          gazName={gazName}
        />
      </div>
    </div>
  );
};

export default DetailsToolSet;
