import Link from 'next/link';

import * as styles from './authSwitchLink.css';

interface AuthSwitchLinkPropTypes {
  message: string;
  actionText: string;
  href: string;
}

const AuthSwitchLink = ({ message, actionText, href }: AuthSwitchLinkPropTypes) => {
  return (
    <div className={styles.container}>
      <span>{message}</span>
      <Link href={href} className={styles.link}>
        {actionText}
      </Link>
    </div>
  );
};

export default AuthSwitchLink;
