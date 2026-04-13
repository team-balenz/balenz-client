/**
 * FilterTabs 컴포넌트에서 사용하는 탭 아이템
 * @property key - 탭의 고유 식별자
 * @property label - 데스크톱/태블릿에서 표시할 라벨
 * @property mobileLabel - 모바일에서 표시할 짧은 라벨 (선택사항)
 */

export interface FilterTabItem {
  key: string;
  label: string;
  mobileLabel?: string;
}
