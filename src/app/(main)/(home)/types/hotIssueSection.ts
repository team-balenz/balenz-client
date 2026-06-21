import { FrameSide, IdeologyFrameType } from '@/shared/types/frame';

export interface HotIssueArticleItemTypes {
  articleId: number;
  articleThumbnail: string;
  frameType: IdeologyFrameType;
  articleTitle: string;
  mediaName: string;
}

export interface HotIssueGroupTypes {
  keywordId: number;
  ideology: FrameSide;
  keyword: string;
  articleItems: HotIssueArticleItemTypes[];
}
