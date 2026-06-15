'use client';

import { useState } from 'react';
import AuthInput from '@/app/(auth)/components/authInput/AuthInput';
import DefaultButton from '@/common/components/defaultButton/DefaultButton';
import { validateEmail, validateRequiredPassword } from '@/app/(auth)/utils/authValidation';

import * as styles from './loginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailError = isSubmitted ? validateEmail(email) : '';
  const passwordError = isSubmitted ? validateRequiredPassword(password) : '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);

    if (!email.trim()) return;
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
