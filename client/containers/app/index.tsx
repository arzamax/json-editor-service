import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getLanguageSchemesNames } from '../../store/actions';
import { IAppProps } from './types';

const App = ({ requestLanguageSchemesNames }: IAppProps): JSX.Element => {
  useEffect(() => {
    requestLanguageSchemesNames();
  });

  return (
    <div>Hello!</div>
  );
};

export default connect(null, { requestLanguageSchemesNames: getLanguageSchemesNames.request })(App);
