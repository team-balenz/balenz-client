'use client';

import Image from 'next/image';

import * as styles from './socialLoginSection.css';

const SocialLoginSection = () => {
  const handleSocialLogin = (provider: 'naver' | 'kakao') => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/${provider}`;
  };

  return (
    <section className={styles.container}>
      <p className={styles.divider}>소셜로그인으로 간편하게 이용해보세요</p>

      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={`${styles.socialButton} ${styles.naverButton}`}
          onClick={() => handleSocialLogin('naver')}
        >
          <div className={styles.buttonContent}>
            <span className={styles.icon}>
              <Image src="/icons/ic_naver_logo.svg" alt="네이버 로고" width={18} height={18} />
            </span>

            <span className={styles.buttonText}>네이버로 시작하기</span>
          </div>
        </button>

        <button
          type="button"
          className={`${styles.socialButton} ${styles.kakaoButton}`}
          onClick={() => handleSocialLogin('kakao')}
        >
          <div className={styles.buttonContent}>
            <span className={styles.icon}>
              <Image src="/icons/ic_kakao_logo.svg" alt="카카오 로고" width={18} height={18} />
            </span>

            <span className={styles.buttonText}>카카오로 시작하기</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default SocialLoginSection;
