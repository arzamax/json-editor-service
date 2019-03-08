import { createSelector } from 'reselect';

const getRawSchemesNames = (state: any) => state.schemesNames;

interface IRawSchemeName {
  id: string;
  name: string;
}

export const schemesNamesSelector = createSelector(
  getRawSchemesNames,
  (rawSchemesNames) => rawSchemesNames.map((item: IRawSchemeName) => ({
    label: item.name,
    value: item.id,
  })),
);

export const activeSchemeNameSelector = (state: any) => state.activeScheme;
export const schemeSelector = (state: any) => state.scheme;
