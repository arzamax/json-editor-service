interface ISchemeName {
  id: string;
  name: string;
}

export interface IState {
  activeSchemeId: string | null;
  names: ISchemeName[] | null;
  scheme: any;
}
