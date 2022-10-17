import ExportClasses from 'components/Export/Export.module.css';
import ExportContainer from 'components/Export/ExportContainer';
import ZoomToEntity from 'components/MarkerContainer/ZoomToEntity/ZoomToEntity';
import ToogleSkip from 'components/Toogle/ToogleSkip';
import ToogleEssentialAttributes from 'components/ToogleEssentialAttributes/ToogleEssentialAttributes';
import { useDetailsDataToExport } from 'Hooks/Export/useDetailsDataToExport';
import CompareTool from 'modules/Content/MainContent/Results/Compare/CompareTool';
import React from 'react';
import { useDispatch } from 'react-redux';
import { switchIsEssential, switchIsFilled } from 'redux/details-reducer';
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
            ? dispatch(switchIsFilled(details.details.id))
            : dispatch(switchIsFilled())
        }
      />
      <ToogleEssentialAttributes
        isEssential={details.isEssential}
        callback={() => dispatch(switchIsEssential(details.details.id))}
      />
      <ZoomToEntity details={details.details} />
      <CompareTool id={details.details.id} gazName={details.gazName} />
      <div>
        <ExportContainer
          entries={[dataToExport.values]}
          jsonEntries={[details.details]}
          passedClass={ExportClasses.exportCSVDetails}
          filename={`entry-${details.details.id}-${details.details.name}-from-${details.gazName}-exported`}
          headers={dataToExport.attributes}
          gazName={details.gazName}
        />
      </div>
    </div>
  );
};

export default DetailsToolSet;
