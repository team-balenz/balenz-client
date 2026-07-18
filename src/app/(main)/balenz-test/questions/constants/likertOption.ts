import { LikertOptionData } from '../types/likert';

export const LIKERT_OPTIONS = [
  {
    value: 1,
    label: '매우 반대',
    size: 'large',
  },
  {
    value: 2,
    size: 'default',
  },
  {
    value: 3,
    label: '약간 반대',
    size: 'default',
  },
  {
    value: 4,
    label: '약간 동의',
    size: 'default',
  },
  {
    value: 5,
    size: 'default',
  },
  {
    value: 6,
    label: '매우 동의',
    size: 'large',
  },
] as const satisfies readonly LikertOptionData[];
