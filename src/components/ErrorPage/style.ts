import styled, { css } from 'styled-components';

export const ErrorText = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.purple};
    font-weight: ${theme.fontWeight.semibold};
    font-size: 24px;
  `}
`;
