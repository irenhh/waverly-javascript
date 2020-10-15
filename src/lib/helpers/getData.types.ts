export type NewsIdData = number[];

type StoryType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export type StoryData = {
  id: number;
  deleted?: boolean;
  type: StoryType;
  by: string;
  time: number;
  text?: HTMLElement;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score: number;
  title?: string;
  parts?: number;
  descendants?: number;
}

export type AuthorData = {
  id: string;
  delay: number;
  created: number;
  karma: number;
  submitted: number[];
}

export type NewsData = StoryData & {
  author: AuthorData;
}
