import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'danger';
  disabled?: boolean;
  onClick: any;
}
