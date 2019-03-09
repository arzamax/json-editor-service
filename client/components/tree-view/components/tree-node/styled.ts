import styled from 'styled-components';

interface IListNodeItem {
  isEmpty: boolean;
}

interface IListItemTitleProps {
  isActive?: boolean;
}

export const List = styled.ul`
  margin-left: 20px;
`;

export const ListNodeItem = styled('li')<IListNodeItem>`
  margin: 20px 0 0 ${({ isEmpty }) => isEmpty ? 56 : 20}px;
  user-select: none;
`;

export const ListValueItem = styled.li`
  margin: 20px 0 0 50px;
  user-select: none;
`;

export const ListItemTitleWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const ListItemTitle = styled('span')<IListItemTitleProps>`
  margin-left: 10px;
  padding: 5px;
  border: 1px dashed transparent;
  cursor: pointer;
  ${({ isActive, theme }: any) => {
    if (isActive) {
      return `
        background: ${theme.handlersColor};
        border: 1px dashed ${theme.mainColor};
        border-radius: 2px;
        color: #fff;
      `;
    }
  }};
`;

export const Toggler = styled.div`
  margin-right: 12px;
  cursor: pointer;
`;
