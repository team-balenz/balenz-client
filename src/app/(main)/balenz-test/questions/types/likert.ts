/**
 * 리커트 응답값과 UI 크기 타입 정의
 */

export type LikertValue = 1 | 2 | 3 | 4 | 5 | 6;

export type LikertOptionSize = 'default' | 'large';

export interface LikertOptionData {
  value: LikertValue;
  label?: string;
  size: LikertOptionSize;
}
