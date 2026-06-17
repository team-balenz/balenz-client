export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export const validateEmail = (email: string) => {
  if (!email.trim()) return '이메일을 입력해주세요.';
  if (!EMAIL_REGEX.test(email)) return '올바른 이메일 형식이 아니에요.';

  return '';
};

export const validateRequiredPassword = (password: string) => {
  if (!password.trim()) return '비밀번호를 입력해주세요.';

  return '';
};

// 회원가입에서 사용
export const validatePasswordFormat = (password: string) => {
  if (!password.trim()) return '비밀번호를 입력해주세요.';

  if (!PASSWORD_REGEX.test(password)) {
    return '영문 대소문자, 숫자, 특수문자(@$!%*?&)를 포함해 8~20자로 입력해주세요.';
  }

  return '';
};

export const validatePasswordConfirm = (password: string, passwordConfirm: string) => {
  if (!passwordConfirm.trim()) return '비밀번호 확인을 입력해주세요.';

  if (password !== passwordConfirm) {
    return '비밀번호가 일치하지 않아요.';
  }

  return '';
};

export const validateEmailDuplicateChecked = (isEmailChecked: boolean) => {
  if (!isEmailChecked) return '이메일 중복 확인을 진행해주세요.';

  return '';
};
