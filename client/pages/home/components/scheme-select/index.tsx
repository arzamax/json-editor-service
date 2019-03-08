import React, { memo, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import Select from '../../../../components/select';
import { getScheme, getSchemesNames } from '../../../../store/actions';
import { activeSchemeNameSelector, schemesNamesSelector } from '../../../../store/selectors';
import { SelectWrapper } from './styled';
import { ISchemeSelectProps } from './types';

const SchemeSelect = ({
  requestSchemesNames,
  schemesNames,
  requestScheme,
  activeScheme,
}: ISchemeSelectProps): JSX.Element => {
  const selectScheme = useCallback((value) => requestScheme(value),  []);

  useEffect(() => {
    requestSchemesNames();
  }, []);

  return (
    <SelectWrapper>
      <Select
        value={activeScheme}
        onChange={selectScheme}
        options={schemesNames}
        placeholder={'Выберите схему'}
        label={'Выберите готовую схему'}
      />
    </SelectWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  activeScheme: activeSchemeNameSelector(state),
  schemesNames: schemesNamesSelector(state),
});

export default connect(mapStateToProps, {
  requestScheme: getScheme.request,
  requestSchemesNames: getSchemesNames.request,
})(memo(SchemeSelect));
