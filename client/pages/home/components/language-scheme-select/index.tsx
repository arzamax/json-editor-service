import React, { memo, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import Select from '../../../../components/select';
import { getLanguageScheme, getLanguageSchemesNames } from '../../../../store/actions';
import { activeLanguageSchemeNameSelector, languageSchemesNamesSelector } from '../../../../store/selectors';
import { SelectWrapper } from './styled';
import { ILanguageSchemeSelectProps } from './types';

const LanguageSchemeSelect = ({
  requestLanguageSchemesNames,
  languageSchemesNames,
  requestLanguageScheme,
  activeLanguageScheme,
}: ILanguageSchemeSelectProps): JSX.Element => {
  const selectLanguageScheme = useCallback((value) => requestLanguageScheme(value),  []);

  useEffect(() => {
    requestLanguageSchemesNames();
  }, []);

  return (
    <SelectWrapper>
      <Select
        value={activeLanguageScheme}
        onChange={selectLanguageScheme}
        options={languageSchemesNames}
        placeholder={'Выберите языковую схему'}
      />
    </SelectWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  activeLanguageScheme: activeLanguageSchemeNameSelector(state),
  languageSchemesNames: languageSchemesNamesSelector(state),
});

export default connect(mapStateToProps, {
  requestLanguageScheme: getLanguageScheme.request,
  requestLanguageSchemesNames: getLanguageSchemesNames.request,
})(memo(LanguageSchemeSelect));
