import styled, { css } from 'styled-components';

export const DataRow = styled.tr`
  ${({ theme }) => css`
    transition: background-color ${theme.transition.duration} ${theme.transition.ease};
    
    &:hover {
      background-color: ${theme.color.pink};
    }
  `}
`;

export const StoryTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.lightBlack};
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 5px;
  `}
`;

export const StoryLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.color.brown}
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    transition: all ${theme.transition.duration} ${theme.transition.ease};
    position: relative;
    
    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      height: 1px;
      opacity: 0;
      background-color: ${theme.color.brown};
      width: 25%;
      transition: all ${theme.transition.duration} ${theme.transition.ease};
    }
    
    &:before {
      left: 50%;
    }
    
    &:after {
      right: 50%;
    }
    
    &:hover {
      cursor: pointer;
      &:before,
      &:after {
        width: 50%;
        opacity: 1;
      }
      

  `}
`;

export const StoryAuthor = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.brown};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  `}
`;

export const AuthorKarma = styled.span`
  ${({ theme }) => css`
    background: ${theme.color.lightPink};
    border-radius: 10px;  
    color: ${theme.color.darkBlue};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-left: 5px;
    padding: 2px 10px;
    cursor: default;
  `}
`;

export const StoryDate = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.lightBlack};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  `}
`;

export const StoryScore = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.lightBlack};
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
  `}
`;
