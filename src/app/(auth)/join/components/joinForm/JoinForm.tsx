'use client';

import { FormEvent, useState } from 'react';

import AuthInput from '@/app/(auth)/components/authInput/AuthInput';
import DefaultButton from '@/common/components/defaultButton/DefaultButton';
import {
  validateEmail,
  validateEmailDuplicateChecked,
  validatePasswordConfirm,
  validatePasswordFormat,
} from '@/app/(auth)/utils/authValidation';

import * as styles from './joinForm.css';

const JoinForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailError = isSubmitted ? validateEmail(email) : '';
  const passwordError = isSubmitted ? validatePasswordFormat(password) : '';
  const passwordConfirmError = isSubmitted
    ? validatePasswordConfirm(password, passwordConfirm)
    : '';
  const emailDuplicateError = isSubmitted ? validateEmailDuplicateChecked(isEmailChecked) : '';

  const handleDuplicateCheck = () => {
    // TODO: 이메일 중복 확인 API 호출
    setIsEmailChecked(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);

    const hasError =
      validateEmail(email) ||
      validatePasswordFormat(password) ||
      validatePasswordConfirm(password, passwordConfirm) ||
      validateEmailDuplicateChecked(isEmailChecked);

    if (hasError) return;

    // TODO: 회원가입 API 호출
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.inputGroup}>
        <AuthInput
          id="email"
          label="이메일"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailChecked(false);
          }}
          placeholder="이메일을 입력해주세요"
          errorMessage={emailError || emailDuplicateError}
          showDuplicateCheck
          onDuplicateCheck={handleDuplicateCheck}
        />

        <AuthInput
          id="password"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          errorMessage={passwordError}
        />

        <AuthInput
          id="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="비밀번호를 한 번 더 입력해주세요"
          errorMessage={passwordConfirmError}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <DefaultButton type="submit" label="회원가입" variant="auth" />
      </div>
    </form>
  );
};

export default JoinForm;
