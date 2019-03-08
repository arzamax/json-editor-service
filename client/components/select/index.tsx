import React from 'react';
import ReactSelect from 'react-select';

import { Label, ReactSelectWrapper } from './styled';
import { ISelect } from './types';

const Select = ({ value, onChange, options, placeholder, label }: ISelect) => (
  <ReactSelectWrapper>
    {label && <Label>{label}</Label>}
    <ReactSelect
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={{
        dropdownIndicator: (base) => ({
          ...base,
          cursor: 'pointer',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        option: (base) => ({
          ...base,
          cursor: 'pointer',
        }),
      }}
    />
  </ReactSelectWrapper>
);

export default Select;
