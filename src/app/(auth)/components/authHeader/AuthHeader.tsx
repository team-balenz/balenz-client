import Image from 'next/image';

import * as styles from './authHeader.css';

interface AuthHeaderPropTypes {
  title: string;
  description: string;
}

const AuthHeader = ({ title, description }: AuthHeaderPropTypes) => {
  return (
    <div className={styles.container}>
      <Image
        src="/logo/auth_logo.svg"
        alt="Balenz 로고"
        className={styles.logoImg}
        width={50}
        height={60}
      />

      <h1 className={styles.title}>{title}</h1>

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default AuthHeader;
