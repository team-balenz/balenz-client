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
