import React, { FC } from 'react';
import { NewsData } from '../../lib/helpers/getData.types';
import { DataRow } from './style';
import { MobileTableRow } from './MobileTableRow';
import { DesktopTableRow } from './DesktopTableRow';

type Props = {
  story: NewsData;
  isMobile: boolean;
}

export const TableRow: FC<Props> = ({
  story,
  isMobile,
}) => {
  const storyDate = new Date(story.time).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <DataRow>
      {isMobile
        ? (
          <MobileTableRow story={story} date={storyDate} />
        ) : (
          <DesktopTableRow story={story} date={storyDate} />
        )}
    </DataRow>
  );
};
