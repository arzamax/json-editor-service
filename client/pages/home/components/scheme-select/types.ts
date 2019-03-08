import { IDefaultAction } from '../../../../store/types/actions';

export interface ISchemeName {
  label: string;
  value: string;
}

export interface ISchemeSelectProps {
  activeScheme: ISchemeName | null;
  schemesNames: ISchemeName[];
  requestSchemesNames: () => IDefaultAction<any>;
  requestScheme: (option: ISchemeName | null) => IDefaultAction<any>;
}
