import React from 'react';

import ReactSelect from 'react-select';

interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  value: IOption | null;
  onChange: (selectedOption: any) => void;
  options: IOption[];
  placeholder?: string;
}

const Select = ({ value, onChange, options, placeholder }: ISelect) => (
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
);

export default Select;
