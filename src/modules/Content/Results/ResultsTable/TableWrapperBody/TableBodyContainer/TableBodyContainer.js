import Error from 'components/Error/Error';
import Preloader from 'components/Preloader/Preloader';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { checkStatus } from 'utils/validators/checkStatus';
import NoData from './NoData/NoData';
import TableBody from './TableBody/TableBody';
import TabsWrapper from './TableBody/TabsWrapper/TabsWrapper';

const TableBodyContainer = props => {
  return (
    <>
      {checkStatus(props.actualState, 'done') || checkStatus(props.actualState, 'separate') ? (
        <TableBody {...props}>
          <TabsWrapper />
        </TableBody>
      ) : props.actualState === 'noData' ? (
        <NoData />
      ) : checkStatus(props.actualState, 'isFetching') ? (
        <Preloader gazName={props.gazName} />
      ) : (
        <Error text={props.actualState} item={props.gazName} />
      )}
    </>
  );
};

export default withReactMemo(TableBodyContainer);
