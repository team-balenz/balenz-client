import AuthHero from './components/authHero/AuthHero';

import * as styles from './layout.css';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <AuthHero />
      <main className={styles.contentSection}>{children}</main>
    </div>
  );
}
