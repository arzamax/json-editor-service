import React, { HTMLAttributes } from 'react';

import { ButtonContainer } from './styled';
import { IButtonProps } from './types';

export const Button = (props: IButtonProps): JSX.Element =>
  (
    <ButtonContainer
      {...props}
    >
      {props.children}
    </ButtonContainer>
  );
