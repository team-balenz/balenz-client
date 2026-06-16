import Image from 'next/image';

import * as styles from './authHero.css';

const AuthHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/img_auth_hero.png"
          alt="Balenz 소개 이미지"
          fill
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
};

export default AuthHero;
