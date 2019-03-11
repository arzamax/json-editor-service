import styled from 'styled-components';

export const ContextMenuWrapper = styled.div`
  position: absolute;
  z-index: 200;
  top: -5px;
  left: 120%;
  width: 200px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.defaultBoxShadow};
`;

export const ContextMenuItem = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: ${theme.transition(['background', 'color'])};

    &:last-child {
      border-top: 1px solid ${theme.mainColor};
    }

    &:first-child {
      border-top: none;
    }

    &:hover {
      background: ${theme.handlersColor};
      color: #fff;
      transition: ${theme.transition(['background', 'color'])};
    }
  `}
`;

export const ContextMenuItemText = styled.span`
  margin-left: 10px;
`;

export const ContextMenuInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const ContextMenuInput = styled.input`
  width: 110px;
  padding: 3px 5px;
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 3px;
  outline: none;
`;

export const ContextMenuInputIconWrapper = styled.div`
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
