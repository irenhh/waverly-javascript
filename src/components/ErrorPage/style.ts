import styled, { css } from 'styled-components';

export const ErrorText = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.purple};
    font-weight: 600;
    font-size: 24px;
  `}
`;
