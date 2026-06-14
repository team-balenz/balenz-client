'use client';

import { useState } from 'react';
import AuthInput from '@/app/(auth)/components/authInput/AuthInput';
import DefaultButton from '@/common/components/defaultButton/DefaultButton';

import * as styles from './loginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const emailError = (() => {
    if (!isSubmitted) return '';

    if (!email.trim()) {
      return '이메일을 입력해주세요.';
    }

    if (!emailRegex.test(email)) {
      return '올바른 이메일 형식이 아니에요.';
    }

    return '';
  })();

  const passwordError = (() => {
    if (!isSubmitted) return '';

    if (!password.trim()) {
      return '비밀번호를 입력해주세요.';
    }

    return '';
  })();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);

    if (!email.trim()) return;
    if (!emailRegex.test(email)) return;
    if (!password.trim()) return;

    // 로그인 API 호출
  };
  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.inputGroup}>
        <AuthInput
          id="email"
          label="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
          errorMessage={emailError}
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
      </div>

      <div className={styles.buttonWrapper}>
        <DefaultButton type="submit" label="로그인" />
      </div>
    </form>
  );
};

export default LoginForm;
