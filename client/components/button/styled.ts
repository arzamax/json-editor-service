import styled from 'styled-components';

import { IButtonProps } from './types';

const getColor = (theme: any, type: 'danger' | null) =>
  type === 'danger' ? theme.errorColor : theme.handlersColor;

export const ButtonContainer = styled.button<IButtonProps>`
  ${({ theme, type }: any) => `
    display: block;
    width: 200px;
    height: 40px;
    padding: 0 10px;
    background: ${getColor(theme, type)};
    border: 1px solid ${getColor(theme, type)};
    color: #ffffff;
    cursor: pointer;
    outline: none;
    transition: ${theme.transition(['background', 'border'])};
    &:hover {
      background: #ffffff;
      border-color: ${getColor(theme, type)};
      color: ${getColor(theme, type)};
      transition: ${theme.transition(['background', 'border'])};
    }
    &:disabled {
      background: ${theme.inactiveColor};
      border: 1px solid ${theme.inactiveColor};
      color: #ffffff;
      cursor: default;
    }
  `}
`;
