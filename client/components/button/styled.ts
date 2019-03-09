import styled from 'styled-components';

import { IButtonProps } from './types';

export const ButtonContainer = styled.button<IButtonProps>`
  ${({ theme, margin }: any) => `
    display: block;
    width: 200px;
    height: 40px;
    padding: 0 10px;
    margin: ${margin || '0'};
    background: ${theme.handlersColor};
    border: 1px solid ${theme.handlersColor};
    color: #ffffff;
    cursor: pointer;
    outline: none;
    transition: ${theme.transition(['background', 'border'])};
    &:hover {
      background: #ffffff;
      color: ${theme.handlersColor};
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
