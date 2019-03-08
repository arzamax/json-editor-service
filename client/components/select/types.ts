interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  value: IOption | null;
  onChange: (selectedOption: any) => void;
  options: IOption[];
  placeholder?: string;
  label?: string;
}