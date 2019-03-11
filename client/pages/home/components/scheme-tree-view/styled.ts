import styled from 'styled-components';

export const TreeViewWrapper = styled.div`
  padding: 50px 0;
`;

export const TreeViewNameInputWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const TreeViewNameLabel = styled.div`
  margin-bottom: 10px;
`;

export const TreeViewNameInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 3px;
  outline: none;
`;
