import styled, { css } from 'styled-components';
import { primaryTitle } from './Typography';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
`;

export const TableHeading = styled.h1`
  ${({ theme }) => css`
    ${primaryTitle()};
    text-transform: uppercase;
    color: ${theme.color.brown};
    margin-bottom: 20px;
  `}
`;
