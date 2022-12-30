import { updateTypes } from 'redux/filter-reducer';
import { addExternEntityToMainResults, changeStatus } from 'redux/results-reducer';
import { getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Handle addtional operations (add extern entity to main results, update types change status) while handling not available entity

export const handleAdditionalOperationsForNotAvailableEntity = (
  getState,
  dispatch,
  gazName,
  detail
) => {
  const usedGazetteers = getUsedGazetteers(getState());
  const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (isUsedGazetteer) {
    dispatch(addExternEntityToMainResults(gazName, detail));
  }
  if (detail.hasOwnProperty('type')) {
    dispatch(updateTypes(detail.type, gazName));
  }
  dispatch(changeStatus(gazName, 'done'));
};
