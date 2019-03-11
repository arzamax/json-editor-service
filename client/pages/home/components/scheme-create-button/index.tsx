import React, { memo } from 'react';
import { connect } from 'react-redux';

import { createScheme as createSchemeAction } from '../../../../store/actions';
import { Button } from './styled';
import { ISchemeCreateButtonProps } from './types';

const SchemeCreateButton = memo(({ createScheme }: ISchemeCreateButtonProps): JSX.Element => {
  return (
    <Button onClick={createScheme}>Create new scheme</Button>
  );
});

export default connect(null, { createScheme: createSchemeAction })(SchemeCreateButton);
