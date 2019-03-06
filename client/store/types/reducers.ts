interface ISchemeName {
  id: string;
  name: string;
}

export interface IState {
  languageSchemesNames: ISchemeName[];
  languageScheme: any;
}
