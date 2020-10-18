import React, { useState, useEffect, FC } from 'react';
import { NewsTable } from './NewsTable';
import { getAuthorData, getNewsIds, getStoryData } from '../lib/helpers/getData';
import { NewsData } from '../lib/helpers/getData.types';
import { MainContainer, TableHeading } from './style';
import { Loader } from './Loader';
import { ErrorPage } from './ErrorPage';
import { getRandomElements } from '../lib/helpers/getRandomElements';

const App: FC = () => {
  const [stories, setStories] = useState<NewsData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const slicedNews = await getNewsIds()
          .then((data) => getRandomElements(data, 10));

        const preparedNews = await Promise.all(
          await slicedNews.map(async (newsId) => {
            const story = await getStoryData(newsId);
            const author = await getAuthorData(story.by);

            return {
              ...story,
              author,
            };
          }),
        );

        const sortedNews = preparedNews.sort((a, b) => a.score - b.score);

        setStories(sortedNews);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <MainContainer>
      <TableHeading>Hacker News</TableHeading>
      {isLoading
        ? <Loader />
        : (stories && <NewsTable stories={stories} />)
      }
    </MainContainer>
  );
};

export default App;
