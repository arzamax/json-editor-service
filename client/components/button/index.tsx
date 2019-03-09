import React, { HTMLAttributes } from 'react';

import { ButtonContainer } from './styled';
import { IButtonProps } from './types';

export const Button = ({ onClick, disabled, margin, children }: IButtonProps) =>
  (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      margin={margin}
    >
      {children}
    </ButtonContainer>
  );
