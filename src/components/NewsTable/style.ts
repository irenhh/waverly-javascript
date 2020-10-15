import styled, { css } from 'styled-components';

export const Table = styled.table`
  ${({ theme }) => css`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border-collapse: collapse;
    
    th,
    td {
      border: none;
      padding: 15px 20px;
    }
    
    tr {
      border-bottom: 1px solid ${theme.color.lightGrey};
      &:last-child {
        border: none;
      }
    }
  `}
`;

export const TableHead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.color.pink};
    color: ${theme.color.brown};
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid ${theme.color.lightGrey};
  `}
`;
