import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
`;

export const TableHeading = styled.h1`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.color.brown};
    margin-bottom: 20px;
  `}
`;
