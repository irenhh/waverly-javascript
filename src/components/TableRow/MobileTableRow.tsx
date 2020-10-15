import React, { FC } from 'react';
import { NewsData } from '../../lib/helpers/getData.types';
import {
  AuthorKarma, StoryAuthor, StoryDate, StoryLink, StoryScore, StoryTitle,
} from './style';

type Props = {
  story: NewsData;
  date: string;
}

export const MobileTableRow: FC<Props> = ({
  story,
  date,
}) => (
  <>
    <td>
      <StoryTitle>{story.title}</StoryTitle>

      <div>
        <StoryLink
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See details
        </StoryLink>
      </div>
      <StoryAuthor>{`by ${story.by}`}</StoryAuthor>
      <AuthorKarma title="karma points">{story.author.karma}</AuthorKarma>
    </td>
    <td>
      <StoryScore>{story.score}</StoryScore>
      <StoryDate>{date}</StoryDate>
    </td>
  </>
);
