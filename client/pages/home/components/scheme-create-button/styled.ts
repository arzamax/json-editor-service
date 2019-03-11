import styled from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => `
    display: inline-block;
    margin-top: 10px;
    padding: 0;
    background: #fff;
    border: none;
    border-bottom: 1px solid ${theme.mainColor};
    color: ${theme.mainColor};
    outline: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `}
`;
