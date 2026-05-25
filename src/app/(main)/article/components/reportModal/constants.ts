export type ReportStep = 'initial' | 'error' | 'completed';

export const REPORT_REASONS = [
  { id: 'inaccurate_summary', label: '요약 내용이 부정확해요' },
  { id: 'ideology_score_error', label: '이념지수 산정이 부정확해요' },
  { id: 'inappropriate_expression', label: '부적절한 표현이 포함되어 있어요' },
  { id: 'other', label: '기타' },
];
