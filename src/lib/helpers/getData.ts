import { AUTHOR_URL, NEWS_URL, STORY_URL } from '../constants/fetch-constants';
import { AuthorData, NewsIdData, StoryData } from './getData.types';

export const getData = async (url: string) => (
  fetch(url).then((data) => data.json())
);

export const getNewsIds = async (): Promise<NewsIdData> => getData(NEWS_URL);

export const getStoryData = async (id: number): Promise<StoryData> => (
  getData(`${STORY_URL}/${id}.json`)
);

export const getAuthorData = async (id: string): Promise<AuthorData> => (
  getData(`${AUTHOR_URL}/${id}.json`)
);
