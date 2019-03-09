import styled from 'styled-components';

export const ContextMenuWrapper = styled.div`
  position: absolute;
  z-index: 200;
  top: -5px;
  left: 120%;
  width: 200px;
  box-shadow: ${({ theme }) => theme.defaultBoxShadow};
`;

export const ContextMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition(['background', 'color'])};

  &:hover {
    background: ${({ theme }) => theme.handlersColor};
    color: #fff;
    transition: ${({ theme }) => theme.transition(['background', 'color'])};
  }
`;

export const ContextMenuItemText = styled.span`
  margin-left: 10px;
`;
