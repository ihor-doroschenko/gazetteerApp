import { AutoComplete } from 'antd';
import 'antd/lib/auto-complete/style/index.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPreviousSearchedPlaceNames } from 'selectors/simple-selectors/search-selectors';

// Wrapper component to autocomplete from ant design for the input field

const PlaceNameInputField = ({ value = '', onChange }) => {
  const [active, setActive] = useState(false);
  const previousSearchTextes = useSelector(getPreviousSearchedPlaceNames);
  return (
    <AutoComplete
      autoFocus
      defaultOpen={false}
      value={value}
      onClick={() => setActive(true)}
      open={active}
      onBlur={() => setActive(false)}
      onChange={value => onChange && onChange(value)}
      onKeyPress={e => {
        setActive(false);
        return e.key === 'Enter';
      }}
      options={previousSearchTextes.map(el => ({ value: el }))}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      allowClear={true}
      placeholder='search phrase'
    />
  );
};

export default PlaceNameInputField;
