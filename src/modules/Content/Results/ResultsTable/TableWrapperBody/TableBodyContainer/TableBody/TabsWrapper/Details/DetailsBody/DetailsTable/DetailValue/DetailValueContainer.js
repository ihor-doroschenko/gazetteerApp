import DetailCellWrapper from 'components/DetailCell/DetailCellWrapper';
import React from 'react';
import MatchingInDetail from './MatchingInDetail';
import PartOfWrapper from './PartOf/PartOfWrapper';

// Wrapper component to contain conditions to show either PartOfWrapper if it is a GOV-entity that contains part-of attribut, or MatchingInDetail if the attribute contains matchings, or DetailCellWrapper if it is another attribute

const DetailValueContainer = ({ value, attribute, details }) => {
  return attribute === 'part-of' ? (
    <PartOfWrapper id={details.detail.id} image={details.image} value={value} />
  ) : attribute === 'matchings' ? (
    <MatchingInDetail matchings={details.detail.matchings} />
  ) : (
    <DetailCellWrapper values={value || ''} limit={5} />
  );
};

export default DetailValueContainer;
