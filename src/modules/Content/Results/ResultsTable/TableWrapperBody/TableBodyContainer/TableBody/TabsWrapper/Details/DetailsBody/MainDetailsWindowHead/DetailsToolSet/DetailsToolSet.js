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

const DetailsToolSet = ({ details, data }) => {
  const dispatch = useDispatch();
  const dataToExport = useDetailsDataToExport(data);
  return (
    <div className={DetailsToolSetClasses.detailsToolSet}>
      <ToogleSkip
        isFilled={details.isFilled}
        callback={() =>
          details.details.id
            ? dispatch(switchDetailMetaProperty(details.details.id, 'isFilled'))
            : dispatch(switchDetailMetaProperty())
        }
      />
      <ToogleEssentialAttributes
        isEssential={details.isEssential}
        callback={() => dispatch(switchDetailMetaProperty(details.details.id, 'isEssential'))}
      />
      <ZoomToEntity details={details.details} gazName={details.gazName} />
      <CompareTool id={details.details.id} gazName={details.gazName} />
      <div>
        <ExportContainer
          entries={[dataToExport.values]}
          jsonEntries={[details.details]}
          passedClass={ExportClasses.exportCSVDetails}
          filename={`${details.gazName}_${details.details.id}_${getNameForExport(
            details.details.name
          )}`}
          headers={dataToExport.attributes}
          gazName={details.gazName}
        />
      </div>
    </div>
  );
};

export default DetailsToolSet;
