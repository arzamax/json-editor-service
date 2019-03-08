interface ISchemeName {
  id: string;
  name: string;
}

export interface IState {
  schemesNames: ISchemeName[];
  scheme: any;
}
