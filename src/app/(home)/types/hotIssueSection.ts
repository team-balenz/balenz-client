import { type IdeologyIndicatorValueTypes } from '@/common/components/indicator/constants';

export interface HotIssueArticleItemTypes {
  articleId: number;
  articleThumbnail: string;
  ideologyIndicatorValue: IdeologyIndicatorValueTypes;
  articleTitle: string;
  mediaName: string;
}

export interface HotIssueGroupTypes {
  keywordId: number;
  ideology: 'progressive' | 'conservative';
  keyword: string;
  articleItems: HotIssueArticleItemTypes[];
}
