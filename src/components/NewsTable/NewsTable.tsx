import React, { FC, useEffect, useState } from 'react';
import { NewsData } from '../../lib/helpers/getData.types';
import { Table, TableHead } from './style';
import { TableRow } from '../TableRow';

interface Props {
  stories: NewsData[];
}

export const NewsTable: FC<Props> = ({
  stories,
}) => {
  const [isMobile, setMobile] = useState<boolean>(window.innerWidth <= 500);

  useEffect(() => {
    const onResize = () => {
      window.innerWidth <= 500
        ? setMobile(true)
        : setMobile(false);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Table>
      {!isMobile && (
        <TableHead>
          <tr>
            <th>Story</th>
            <th>User</th>
            <th>Date</th>
            <th>Score</th>
          </tr>
        </TableHead>
      )}

      <tbody>
        {stories.map((story) => (
          <TableRow
            key={story.id}
            story={story}
            isMobile={isMobile}
          />
        ))}
      </tbody>
    </Table>
  );
};
