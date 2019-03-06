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
}

export const Select = ({ value, onChange, options }: ISelect) => (
  <ReactSelect value={value} onChange={onChange} options={options}/>
);
