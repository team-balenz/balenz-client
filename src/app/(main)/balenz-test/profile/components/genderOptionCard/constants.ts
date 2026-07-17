import type { GenderOptionDataTypes } from './types';

export const GENDER_OPTIONS = [
  {
    value: 'male',
    label: '남성',
    defaultIconPath: '/icons/ic_gender_male_default.svg',
    selectedIconPath: '/icons/ic_gender_male_selected.svg',
  },
  {
    value: 'female',
    label: '여성',
    defaultIconPath: '/icons/ic_gender_female_default.svg',
    selectedIconPath: '/icons/ic_gender_female_selected.svg',
  },
] satisfies GenderOptionDataTypes[];
