import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  margin?: string;
  disabled?: boolean;
  onClick: any;
}
