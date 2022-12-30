import Error from 'components/Error/Error';
import Preloader from 'components/Preloader/Preloader';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useSelector } from 'react-redux';
import { getGazetteerStatus } from 'selectors/reselectors/simple-reselectors';
import { checkStatus } from 'utils/validators/checkStatus';
import NoData from './NoData/NoData';
import TableBody from './TableBody/TableBody';
import TabsWrapper from './TableBody/TabsWrapper/TabsWrapper';

// Wrapper component to contain content for the subtable of the results table depending on the actual status of each requested gazetteer

const TableBodyContainer = ({ gazName }) => {
  const status = useSelector(state => getGazetteerStatus(state, gazName));
  return (
    <>
      {checkStatus(status, 'done') ? (
        <TableBody gazName={gazName}>
          <TabsWrapper />
        </TableBody>
      ) : checkStatus(status, 'noData') ? (
        <NoData />
      ) : checkStatus(status, 'isFetching') ? (
        <Preloader gazName={gazName} />
      ) : (
        <Error item={gazName} />
      )}
    </>
  );
};

export default withReactMemo(TableBodyContainer);
