import React, { memo, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { Select } from '../../components/select';
import { getLanguageScheme, getLanguageSchemesNames } from '../../store/actions';
import { activeLanguageSchemeSelector, languageSchemesNamesSelector } from '../../store/selectors';
import { IHomeProps } from './types';

const Home = ({
  requestLanguageSchemesNames,
  languageSchemeNames,
  requestLanguageScheme,
  activeLanguageScheme,
}: IHomeProps): JSX.Element => {
  const selectScheme = useCallback((value) => requestLanguageScheme(value),  []);

  useEffect(() => {
    requestLanguageSchemesNames();
  }, []);

  return (
    <Select
      onChange={selectScheme}
      value={activeLanguageScheme}
      options={languageSchemeNames}
    />
  );
};

const mapStateToProps = (state: any) => ({
  activeLanguageScheme: activeLanguageSchemeSelector(state),
  languageSchemeNames: languageSchemesNamesSelector(state),
});

export default connect(mapStateToProps, {
  requestLanguageScheme: getLanguageScheme.request,
  requestLanguageSchemesNames: getLanguageSchemesNames.request,
})(memo(Home));
