interface ISchemeName {
  id: string;
  name: string;
}

export interface IState {
  activeScheme: ISchemeName | null;
  schemesNames: ISchemeName[];
  scheme: any;
  isSchemeSavingError: boolean;
  isSchemeTouched: boolean;
}
