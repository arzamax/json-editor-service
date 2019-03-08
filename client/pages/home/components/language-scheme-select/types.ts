import { IDefaultAction } from '../../../../store/types/actions';

export interface ILanguageSchemeName {
  label: string;
  value: string;
}

export interface ILanguageSchemeSelectProps {
  activeLanguageScheme: ILanguageSchemeName | null;
  languageSchemesNames: ILanguageSchemeName[];
  requestLanguageSchemesNames: () => IDefaultAction<any>;
  requestLanguageScheme: (option: ILanguageSchemeName | null) => IDefaultAction<any>;
}
