import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'antd/lib/button/style/index.css';
import classNames from 'classnames';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchSearch } from 'redux/nav-reducer';
import { getIsSatellite, getIsSearch } from 'selectors/simple-selectors/nav-selectors';
import { addNoShadow } from 'utils/Styling/addNoShadow';
import SearchMenuSwitcherClasses from './SearchMenuSwitcher.module.css';

const SearchMenuSwitcher = ({ resized }) => {
  const dispatch = useDispatch();
  const isSearch = useSelector(getIsSearch);
  const isSatellite = useSelector(getIsSatellite);
  return (
    <div
      className={addNoShadow(
        classNames(SearchMenuSwitcherClasses.searchMenuSwitcherWrapper, {
          [SearchMenuSwitcherClasses.searchMenuSwitcherWrapperSwitched]: !isSearch,
          [SearchMenuSwitcherClasses.searchControllerResized]: resized,
        }),
        isSatellite
      )}
      onClick={() => {
        dispatch(switchSearch(!isSearch));
      }}>
      {!isSearch && <div className={SearchMenuSwitcherClasses.titleSearchMenuSwitcher}>Search</div>}
      <div
        className={classNames(
          addNoShadow(
            {
              [SearchMenuSwitcherClasses.rightIfShowed]: isSearch,
              [SearchMenuSwitcherClasses.rightIfHidden]: !isSearch,
            },
            isSatellite
          )
        )}>
        <TooltipContainer
          placement='right'
          icon={isSearch ? faAngleLeft : faAngleRight}
          text={isSearch ? 'tt_search_switcher_on' : 'tt_search_switcher_off'}
          delay={true}
        />
      </div>
    </div>
  );
};

export default SearchMenuSwitcher;
