import { LikertValue } from './likert';

export interface BalenzQuestion {
  id: number;
  content: string;
}

export type QuestionId = number | string;

export type BalenzAnswers = Partial<Record<QuestionId, LikertValue>>;
