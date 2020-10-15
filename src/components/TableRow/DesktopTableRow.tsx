import React, { FC } from 'react';
import { NewsData } from '../../lib/helpers/getData.types';
import { AuthorKarma, StoryAuthor, StoryDate, StoryLink, StoryScore, StoryTitle } from './style';

type Props = {
  story: NewsData;
  date: string;
}

export const DesktopTableRow: FC<Props> = ({
  story,
  date,
}) => (
  <>
    <td>
      <StoryTitle>{story.title}</StoryTitle>

      <StoryLink
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        See details
      </StoryLink>
    </td>
    <td>
      <div>
        <StoryAuthor>{story.by}</StoryAuthor>
        <AuthorKarma title="karma points">{story.author.karma}</AuthorKarma>
      </div>
    </td>
    <td>
      <StoryDate>{date}</StoryDate>
    </td>
    <td>
      <StoryScore>{story.score}</StoryScore>
    </td>
  </>
);
