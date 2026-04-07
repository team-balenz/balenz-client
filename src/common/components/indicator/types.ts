/**
 * 이념 지표 관련 타입 상수화
 */

// 이념 지표 관련 타입

// 데스크탑과 태블릿 사이즈 타입
export type DesktopTabletSizeTypes = 'small' | 'medium' | 'large';

// 모바일 사이즈 타입
export type MobileSizeTypes = 'extraSmall' | 'small' | 'medium' | 'large';

// 이념 지표 관련 타입 인터페이스
// 반응형 사이즈 타입
export interface IdeologyIndicatorResponsiveSizeTypes {
  desktop?: DesktopTabletSizeTypes;
  tablet?: DesktopTabletSizeTypes;
  mobile?: MobileSizeTypes;
}
