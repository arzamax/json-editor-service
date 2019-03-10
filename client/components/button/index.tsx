import React, { HTMLAttributes } from 'react';

import { ButtonContainer } from './styled';
import { IButtonProps } from './types';

export const Button = (props: IButtonProps) =>
  (
    <ButtonContainer
      {...props}
    >
      {props.children}
    </ButtonContainer>
  );
