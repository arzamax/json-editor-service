import { createSelector } from 'reselect';

const getRawLanguageSchemesNames = (state: any) => state.languageSchemesNames;

interface IRawLanguageSchemeName {
  id: string;
  name: string;
}

export const languageSchemesNamesSelector = createSelector(
  getRawLanguageSchemesNames,
  (rawLanguageSchemesNames) => rawLanguageSchemesNames.map((item: IRawLanguageSchemeName) => ({
    label: item.name,
    value: item.id,
  })),
);

export const activeLanguageSchemeNameSelector = (state: any) => state.activeScheme;
export const languageSchemeSelector = (state: any) => state.languageScheme;
