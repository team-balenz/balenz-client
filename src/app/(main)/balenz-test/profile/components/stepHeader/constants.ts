import type { ProfileStepTypes } from '../../types/profileStep';

export const STEP_HEADER_LABEL = '응답자 정보';

export const PROFILE_STEP_TITLE = {
  birthYear: '태어난 연도를 선택해 주세요.',
  gender: '법적 성별을 선택해 주세요.',
} satisfies Record<ProfileStepTypes, string>;
