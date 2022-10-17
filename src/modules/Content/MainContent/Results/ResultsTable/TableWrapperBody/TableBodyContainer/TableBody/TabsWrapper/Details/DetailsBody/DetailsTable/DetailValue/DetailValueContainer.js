import React from 'react';
import DetailCellWrapper from './DetailCell/DetailCellWrapper';
import MatchingInDetail from './MatchingInDetail';
import PartOfWrapper from './PartOf/PartOfWrapper';

const DetailValueContainer = ({ value, attribute, details }) => {
  return attribute === 'part-of' ? (
    <PartOfWrapper id={details.details.id} image={details.image} value={value} />
  ) : attribute === 'matchings' ? (
    <MatchingInDetail matchings={details.details.matchings} />
  ) : (
    <DetailCellWrapper values={value || ''} limit={5} />
  );
};

export default DetailValueContainer;
