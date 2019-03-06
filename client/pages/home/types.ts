import { IDefaultAction } from '../../store/types/actions';

interface ILanguageSchemeName {
  label: string;
  value: string;
}

export interface IHomeProps {
  activeLanguageScheme: ILanguageSchemeName;
  languageSchemeNames: ILanguageSchemeName[];
  requestLanguageSchemesNames: () => IDefaultAction<any>;
  requestLanguageScheme: (id: string) => IDefaultAction<any>;
}
