import AuthHeader from '../components/authHeader/AuthHeader';
import AuthSwitchLink from '../components/authSwitchLink/AuthSwitchLink';
import SocialLoginSection from '../components/socialLoginSection/SocialLoginSection';
import JoinForm from './components/joinForm/JoinForm';
import * as styles from './page.css';

export default function JoinPage() {
  return (
    <div className={styles.container}>
      <AuthHeader title="회원가입하기" description="Balenz에 오신 것을 환영합니다" />

      <div className={styles.content}>
        <JoinForm />
        <AuthSwitchLink message="이미 계정이 있으신가요?" actionText="로그인하기" href="/login" />
      </div>

      <SocialLoginSection />
    </div>
  );
}
