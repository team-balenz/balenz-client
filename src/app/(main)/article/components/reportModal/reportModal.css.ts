import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/color.css';
import { media, typography } from '@/shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.875rem 2.125rem',

  '@media': {
    [media.mobile]: {
      padding: '1.5625rem',
    },
  },
});

// 상단 제목 섹션
export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
});

// 제목
export const title = style({
  ...typography.desktop.h2,
  color: color.text.main,

  '@media': {
    [media.tablet]: typography.tablet.h2,
    [media.mobile]: typography.phone.h2,
  },
});

// 설명 텍스트
export const description = style({
  ...typography.desktop.body2,
  ...typography.correction,
  color: color.text.tertiary,
  marginTop: '0.3125rem',

  '@media': {
    [media.tablet]: typography.tablet.body2,
    [media.mobile]: {
      ...typography.phone.body2,
      whiteSpace: 'pre-line',
    },
  },
});

// 구분선
export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: '#F3F3F3',
  border: 'none',
  marginTop: '1.25rem',
});

// 문제 선택 섹션
export const selectSection = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.625rem',

  '@media': {
    [media.tablet]: {
      marginTop: '1.6875rem',
    },
    [media.mobile]: {
      marginTop: '1.1875rem',
    },
  },
});

// label wrapper
export const labelWrapper = style({
  display: 'flex',
});

// label
export const label = style({
  ...typography.desktop.h3,
  color: color.text.main,

  '@media': {
    [media.tablet]: typography.tablet.h3,
    [media.mobile]: typography.phone.h3,
  },
});

// * 표시 별도 스타일링
export const required = style({
  color: color.system.error,
  marginLeft: '0.0625rem',
  marginBottom: '0.375rem',
  display: 'inline-block',
  verticalAlign: 'top',
});

// 라디오 버튼 그룹
export const radioGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3125rem',
  marginTop: '0.625rem',
});

// 라디오 label
export const radioLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
  cursor: 'pointer',
  color: color.text.main,
  ...typography.desktop.body1,
  ...typography.correction,

  '@media': {
    [media.tablet]: typography.tablet.body1,
    [media.mobile]: typography.phone.body1,
  },
});

// 라디오 인풋 버튼
export const radioInput = style({
  width: '1.25rem',
  height: '1.25rem',
  cursor: 'pointer',
  appearance: 'none',
  border: `0.0938rem solid ${color.brand.gray2}`,
  borderRadius: '50%',
  backgroundColor: 'transparent',
  margin: 0,
  selectors: {
    '&:checked': {
      borderColor: color.brand.main,
      boxShadow: `inset 0 0 0 0.3125rem ${color.brand.main}`,
    },
  },
});

// 에러 메시지
export const errorMessage = style({
  color: color.system.error,
  ...typography.desktop.caption,

  '@media': {
    [media.tablet]: typography.tablet.caption,
    [media.mobile]: typography.phone.caption,
  },
});

// 추가 설명 섹션
export const additionalSection = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.875rem',

  '@media': {
    [media.tablet]: {
      marginTop: '3.25rem',
    },
    [media.mobile]: {
      marginTop: '2.3125rem',
    },
  },
});

// textarea 스타일
export const textArea = style({
  width: '100%',
  minHeight: '6.5625rem',
  padding: '0.875rem 1.125rem',
  border: `1px solid ${color.brand.gray2}`,
  borderRadius: '0.3125rem',
  marginTop: '0.625rem',
  ...typography.desktop.body1,
  ...typography.correction,
  color: color.text.main,
  fontFamily: 'inherit',
  resize: 'none',
  selectors: {
    '&::placeholder': {
      color: color.text.disabled,
      ...typography.desktop.body1,
    },
    '&:focus': {
      outline: 'none',
    },
  },

  '@media': {
    [media.tablet]: {
      ...typography.tablet.body1,
      padding: '0.875rem 1.5625rem',
      selectors: {
        '&::placeholder': {
          ...typography.tablet.body1,
        },
      },
    },
    [media.mobile]: {
      ...typography.phone.body1,
      padding: '0.625rem 1rem',
      selectors: {
        '&::placeholder': {
          ...typography.phone.body1,
        },
      },
    },
  },
});

// 버튼 그룹
export const buttonGroup = style({
  display: 'flex',
  gap: '0.75rem',
  marginTop: '2.5rem',

  '@media': {
    [media.tablet]: {
      marginTop: '2.8125rem',
    },
    [media.mobile]: {
      marginTop: '1.625rem',
    },
  },
});

// 버튼 기본 스타일
export const button = style({
  padding: '0.9375rem',
  borderRadius: '0.3125rem',
  border: 'none',
  cursor: 'pointer',
  ...typography.desktop.body2,

  '@media': {
    [media.tablet]: typography.tablet.body2,
    [media.mobile]: typography.phone.body2,
  },
});

// 취소하기 버튼
export const cancelButton = style([
  button,
  {
    width: '8.75rem',
    backgroundColor: color.brand.gray2,
    color: color.text.secondary,
  },
]);

// 문제 제보하기 버튼
export const submitButton = style([
  button,
  {
    width: '100%',
    backgroundColor: color.brand.main,
    color: color.brand.background,
  },
]);

// 완료 모달 스타일
export const completedContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '9.1875rem 10.1875rem 0 10.25rem',
  textAlign: 'center',
  overflow: 'hidden',

  '@media': {
    [media.tablet]: {
      padding: '9.1875rem 9.5625rem 0 9.5625rem',
    },
    [media.mobile]: {
      padding: '9.1875rem 3rem 0 3rem',
    },
  },
});

// 완료 모달 로고 이미지
export const logoImage = style({
  width: '19.0625rem',
  height: '23rem',
  marginTop: '5.5625rem',
  marginBottom: '-6.0625rem',

  '@media': {
    [media.tablet]: {
      marginTop: '5.9375rem',
      marginBottom: '-7.5625rem',
    },
    [media.mobile]: {
      width: '16.5rem',
      height: '19.9375rem',
      marginBottom: '-5rem',
      marginTop: '4.4375rem',
    },
  },
});

// 완료 모달 제목
export const completedTitle = style({
  ...typography.desktop.display,
  color: color.text.main,

  '@media': {
    [media.tablet]: typography.tablet.display,
    [media.mobile]: typography.phone.display,
  },
});

// 완료 모달 설명
export const completedDescription = style({
  ...typography.desktop.body1,
  color: color.text.tertiary,
  whiteSpace: 'pre-line',

  '@media': {
    [media.tablet]: typography.tablet.body1,
    [media.mobile]: { ...typography.phone.body1, marginTop: '0.875rem' },
  },
});
