import styled, { css } from 'styled-components';
import { captionText, link, secondaryTitle } from '../Typography';

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
    ${secondaryTitle()};
    color: ${theme.color.lightBlack};
    margin-bottom: 5px;
  `}
`;

export const StoryLink = styled.a`
  ${({ theme }) => css`
    ${link()};
    position: relative;
    color: ${theme.color.brown};
    transition: all ${theme.transition.duration} ${theme.transition.ease};
    
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
    }
  `}
`;

export const StoryAuthor = styled.span`
  ${({ theme }) => css`
    ${captionText()};
    color: ${theme.color.brown};
  `}
`;

export const AuthorKarma = styled.span`
  ${({ theme }) => css`
    ${captionText()};
    border-radius: 10px;
    margin-left: 5px;
    padding: 2px 10px;
    background: ${theme.color.lightPink};  
    color: ${theme.color.darkBlue};
    cursor: default;
  `}
`;

export const StoryDate = styled.div`
  ${({ theme }) => css`
    ${captionText()};
    color: ${theme.color.lightBlack};
  `}
`;

export const StoryScore = styled.div`
  ${({ theme }) => css`
    ${secondaryTitle()};
    color: ${theme.color.lightBlack};
    text-transform: uppercase;
  `}
`;
