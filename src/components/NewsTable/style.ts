import styled, { css } from 'styled-components';
import { boldText } from '../Typography';

export const Table = styled.table`
  ${({ theme }) => css`
    border-radius: 8px;
    border-collapse: collapse;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    
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
    ${boldText()};
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid ${theme.color.lightGrey};
    background-color: ${theme.color.pink};
    color: ${theme.color.brown};
  `}
`;
