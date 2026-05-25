'use client';

import { useState, useEffect } from 'react';
import { breakpoints } from '@/shared/styles/media';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

/**
 * 현재 브라우저의 viewport 크기에 따라 breakpoint를 감지하는 hook
 * @returns 현재 breakpoint ('mobile' | 'tablet' | 'desktop')
 *
 * @example
 * const breakpoint = useMediaQuery();
 * if (breakpoint === 'mobile') {
 *   // 모바일 전용 로직
 * }
 */
export const useMediaQuery = (): Breakpoint => {
  // 서버 사이드 렌더링 초기값: 'desktop'
  // 클라이언트에서 useEffect에서 실제 값으로 업데이트됨
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width <= breakpoints.mobile) {
        setBreakpoint('mobile');
      } else if (width <= breakpoints.tablet) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    };

    // 마운트 시 초기값 계산
    updateBreakpoint();

    // 창 크기 변경 시 breakpoint 재계산
    window.addEventListener('resize', updateBreakpoint);

    // 클린업: 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);

  return breakpoint;
};
