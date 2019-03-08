import styled from 'styled-components';

interface IListItemTitleProps {
  isActive?: boolean;
}

export const List = styled.ul`
  margin-left: 20px;
`;

export const ListItem = styled.li`
  margin: 20px 0 0 20px;
  user-select: none;
`;

export const ListItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ListItemTitle = styled('span')<IListItemTitleProps>`
  margin-left: 10px;
  border: 1px dashed transparent;
  cursor: pointer;
  ${({ isActive, theme }: any) => {
    if (isActive) {
      return `
        background: ${theme.handlersColor};
        border: 1px dashed ${theme.mainColor};
        border-radius: 2px;
      `;
    }
  }};
`;

export const Toggler = styled.div`
  margin-right: 12px;
  cursor: pointer;
`;
