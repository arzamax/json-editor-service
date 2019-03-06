import { createSelector } from 'reselect';

const getRawLanguageSchemesNames = (state: any) => state.languageSchemesNames;

interface IRawLanguageSchemeName {
  id: string;
  name: string;
}

export const activeLanguageSchemeSelector = (state: any) => state.activeScheme;

export const languageSchemesNamesSelector = createSelector(
  getRawLanguageSchemesNames,
  (rawLanguageSchemesNames) => rawLanguageSchemesNames.map((item: IRawLanguageSchemeName) => ({
    label: item.name,
    value: item.id,
  })),
);
