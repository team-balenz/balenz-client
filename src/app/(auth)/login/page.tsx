import AuthHeader from '../components/authHeader/AuthHeader';
import AuthSwitchLink from '../components/authSwitchLink/AuthSwitchLink';
import SocialLoginSection from '../components/socialLoginSection/SocialLoginSection';
import LoginForm from './components/loginForm/LoginForm';
import * as styles from './page.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <AuthHeader title="로그인하기" description="Balenz에 오신 것을 환영합니다" />

      <div className={styles.content}>
        <LoginForm />
        <AuthSwitchLink message="계정이 없으신가요?" actionText="회원가입하기" href="/join" />
      </div>

      <SocialLoginSection />
    </div>
  );
}
