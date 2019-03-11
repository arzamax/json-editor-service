import React from 'react';
import ReactSelect from 'react-select';

import MAIN_THEME from '../../themes/main';
import { Label, ReactSelectWrapper } from './styled';
import { ISelectProps } from './types';

const Select = ({ value, onChange, options, placeholder, label }: ISelectProps): JSX.Element => (
  <ReactSelectWrapper>
    {label && <Label>{label}</Label>}
    <ReactSelect
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={{
        control: (base) => ({
          ...base,
          border: `1px solid ${MAIN_THEME.handlersColor}`,
        }),
        dropdownIndicator: (base) => ({
          ...base,
          cursor: 'pointer',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        menu: (base) => ({
          ...base,
          borderRadius: '0',
          boxShadow: MAIN_THEME.defaultBoxShadow,
          width: '100%',
        }),
        option: (base) => ({
          ...base,
          '&:hover': {
            background: MAIN_THEME.handlersColor,
          },
          'cursor': 'pointer',
        }),
      }}
    />
  </ReactSelectWrapper>
);

export default Select;
